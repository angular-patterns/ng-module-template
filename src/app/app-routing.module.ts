import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmbeddedFrameComponent } from './embedded-frame/embedded-frame.component';

const routes: Routes = [
  { path: '', loadChildren: './info/info.module#InfoModule'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
