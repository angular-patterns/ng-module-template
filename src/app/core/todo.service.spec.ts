import { TodoService } from "./todo.service";
import { HttpClient } from "@angular/common/http";
import { of, Observable, defer } from 'rxjs';
import { Todo } from "../models/todo.model";

export function asyncData<T>(data: T) {
    return defer(() => Promise.resolve(data));
  }

describe('TodoService', () => {
    let todoService: TodoService;
    let httpClient: HttpClient;
    let store: any;

    beforeEach(() => { 
      httpClient = jasmine.createSpyObj('HttpClient', ['get', 'post', 'put', 'delete']);
      todoService = new TodoService(httpClient);
      store = (<any>todoService)._store;

    });
  
    it('should initialize', () => {
        expect(store).toBeDefined(); 
        expect(todoService.todos$).toBeDefined();
        
    });
    it ('#all should return Observable', () => {
        let all = asyncData<Todo[]>([]);
        (<any>httpClient).get.and.returnValue(all);
        
        let q$ = todoService.all();
        expect(q$).toBe(all);
        expect(httpClient.get).toHaveBeenCalledWith('http://localhost:3000/todos');
    })
    it ('#load should fire todo$', (done: DoneFn)=> {
        let todos: Todo[] = [];
        (<any>httpClient).get.and.returnValue(asyncData(todos));

        todoService.todos$.subscribe(t=> {
            expect(t).toBe(todos);
            expect(store.todos).toBe(todos);
            done();
        });
        todoService.load();
    })

    it ('#add should add todo', (done: DoneFn)=> {
        let todo: Todo = { id: 1, title: 'new todo'};
        (<any>httpClient).post.and.returnValue(asyncData(todo));

        todoService.todos$.subscribe(t=> {
            expect(t).toBeDefined();
            expect(t).toContain(todo);
            done();
        });

        todoService.add(todo);

    });

    it ('#get should return single todo', () => {

        todoService.get(1);
        expect(httpClient.get).toHaveBeenCalledWith('http://localhost:3000/todos/1');
    });

    it ('#update should update todo', (done: DoneFn)=> {
        store.todos = [{ id: 1, title: 'new todo'}];
        let todo: Todo = { id: 1, title: 'changed'};
        (<any>httpClient).put.and.returnValue(asyncData(todo));

        todoService.todos$.subscribe(t=> {
            expect(t).toEqual(store.todos);
            expect(t.length).toBe(1)
            expect(t).toContain(todo);
            done();
        });

        todoService.update(1, store.todos[0]);
        expect(httpClient.put).toHaveBeenCalledWith('http://localhost:3000/todos/1', store.todos[0]);
    });
    it ('#remove should remove todo', (done: DoneFn)=> {
        store.todos = [{ id: 1, title: 'new todo'}];

        (<any>httpClient).delete.and.returnValue(asyncData(null));

        todoService.todos$.subscribe(t=> {
            expect(t).toEqual(store.todos);
            expect(t.length).toBe(0)
            expect(t).not.toContain(store.todos[0]);
            done();
        });

        todoService.remove(1);
    });
  
  });
  