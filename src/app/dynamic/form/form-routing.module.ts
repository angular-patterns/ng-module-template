import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionComponent } from '../section/section.component';


const routes: Routes = [
  { path: '',  redirectTo: 'sections', pathMatch: 'full' },
  { path: 'sections',  component: SectionComponent},
  { path: 'sections/:id', component: SectionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
