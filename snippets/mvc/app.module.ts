import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyService } from './data/my.service';
import { FooComponent } from './foo/foo.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FooComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MyService]
})
export class AppModule { }
