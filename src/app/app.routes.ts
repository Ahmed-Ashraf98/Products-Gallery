import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  {
    path: '',
    loadComponent: () =>
      import('./core/layout/mainLayout.component').then(
        (c) => c.MainLayoutComponent
      ),
    loadChildren: () =>
      import('./features/product/product.routes').then((r) => r.productRoutes),
  },
];
