import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TodoService } from '../core/todo.service';

@Component({
  selector: 'app-remove-todo',
  templateUrl: './remove-todo.component.html',
  styleUrls: ['./remove-todo.component.css']
})
export class RemoveTodoComponent implements OnInit {
  @Input() todo;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private todoService: TodoService) { 

  }

  ngOnInit() {
  }
  openModal(template) {
    this.modalRef = this.modalService.show(template);
  }
  ok() {
    this.todoService.remove(this.todo.id);
    this.modalRef.hide();
  }
  cancel() {
    this.modalRef.hide();
  }
}
