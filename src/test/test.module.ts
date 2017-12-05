import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TestComponent } from './test.component';

@NgModule({
  imports:      [ BrowserModule],
  declarations: [ TestComponent ],
  exports: [TestComponent]
})
export class TestModule {
}
