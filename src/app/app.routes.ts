import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./core/layout/mainLayout.component').then(
        (c) => c.MainLayoutComponent
      ),
    loadChildren: () =>
      import('./features/product/product.routes').then((r) => r.productRoutes),
  },
];
