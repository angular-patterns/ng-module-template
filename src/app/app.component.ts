import { Component, AfterViewInit } from '@angular/core';
//import * as ClassicEditor  from '@ckeditor/ckeditor5-build-classic/build/ckeditor.js';
import  * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title: string;
  constructor() {
    this.title = 'Hello World!';

  }
  ngAfterViewInit(){
    ClassicEditor
      .create( document.querySelector( '#snippet-classic-editor' ), {
        cloudServices: {},
        toolbar: {
          viewportTopOffset: 60
        }
      } )
      .then( editor => {
        (<any>window).editor = editor;
      } )
      .catch( err => {
        console.error( err );
      } );

  }
}
