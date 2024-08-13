import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'modulo1',
    loadChildren: () => import('./modulo1/modulo1.module').then(m => m.Modulo1Module)
  },
  {
    path: 'modulo2',
    loadChildren: () => import('./modulo2/modulo2.module').then(m => m.Modulo2Module)
  },
  { path: '', redirectTo: '/modulo1/child1', pathMatch: 'full' }
];

