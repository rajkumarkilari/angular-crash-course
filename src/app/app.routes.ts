import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'new-page',
    loadComponent: () =>
      import('./components/new-page/new-page.component').then(
        (m) => m.NewPageComponent
      ),
  },
];
