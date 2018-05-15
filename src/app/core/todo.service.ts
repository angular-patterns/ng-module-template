import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Todo } from "../models/todo.model";
import { Subject, Observable } from "rxjs";

@Injectable()
export class TodoService {
    private _store: { todos: Todo[] };
    private _todos: Subject<Todo[]>;
    constructor(private http:HttpClient) {
        this._store = { todos: [] };
        this._todos = new Subject<Todo[]>();
        
    }
    get todos$(): Observable<Todo[]> {
        return this._todos.asObservable();
    }
    all() {
        return this.http.get<Todo[]>('http://localhost:3000/todos');
    }
    add(todo: Todo) {
        const added = this.http.post<Todo>('http://localhost:3000/todos', todo);
        added.subscribe(t=> {
            this._store.todos.push(t);
            this._todos.next(this._store.todos);
        })
        return added;
    }
    get(id: number) {
        return this.http.get<Todo>(`http://localhost:3000/todos/${id}`);
    }
    update(id: number, todo: Todo) {
        const updated = this.http.put<Todo>(`http://localhost:3000/todos/${id}`, todo);
        updated.subscribe(t=> {
            let i = this._store.todos.indexOf(todo);
            if (i >= 0) {
                this._store.todos[i]= t;
            }
        })
        return updated;
    }
    remove(id: number) {
        const deleted = this.http.delete(`http://localhost:3000/todos/${id}`);
        deleted.subscribe(t=> {
            let i = this._store.todos.findIndex(t=> t.id == id);
            if (i >= 0) {
                this._store.todos.splice(i, 1);
                this._todos.next(this._store.todos);
            }
        })
        return deleted;
        
    }
    load() {
        this.all().subscribe(t=> {
            this._store.todos = t;
            this._todos.next(t);
        });
    }
}