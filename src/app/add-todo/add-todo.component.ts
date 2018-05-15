import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoService } from '../core/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  formGroup: FormGroup;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService, private todoService: TodoService) {
    this.initForm();    
  }
  initForm() {
    this.formGroup = new FormGroup({
      title: new FormControl('', Validators.required)
    });

  }
 
  openModal(template: TemplateRef<any>) {
    this.initForm();
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

  onSubmit(formGroup:  FormGroup) {
    if (formGroup.valid) {
      this.todoService.add({ id: 0, title: formGroup.value.title});
      this.modalRef.hide();
    }
  }

}
