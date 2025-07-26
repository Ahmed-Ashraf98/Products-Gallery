import { Route } from '@angular/router';

export const productRoutes: Route[] = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  {
    path: 'products',
    loadComponent: () =>
      import('../product/pages/products/products.component').then(
        (c) => c.ProductsComponent
      ),
  },
  {
    path: 'products/:id',
    loadComponent: () =>
      import('../product/pages/productDetails/productDetails.component').then(
        (c) => c.ProductDetailsComponent
      ),
  },
];
