import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child3Component } from './child3/child3.component';
import { Child4Component } from './child4/child4.component';

const routes: Routes = [
  { path: 'child3', component: Child3Component },
  { path: 'child4', component: Child4Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Modulo2RoutingModule { }

