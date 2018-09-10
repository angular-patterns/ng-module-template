import { Component, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeUrl } from '@angular/platform-browser';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  modalRef: BsModalRef;
  title: string;
  constructor(private modalService: BsModalService, private http: HttpClient) {
    this.title = 'Hello World!';
  }
  ngAfterViewInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.http.get('http://localhost/webapplication3', 
      { responseType: 'text', headers: new HttpHeaders().set('Accept', 'text/html')}).subscribe(t=> {
      this.modalRef = this.modalService.show(template, {class: 'modal-lg'});
    })
  }
}
