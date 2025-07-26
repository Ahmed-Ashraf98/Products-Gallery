import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/features/product/product.model';

// Load Products
export const loadProducts = createAction('[Product] Load Products');

// Filter Products
export const filiterProducts = createAction(
  '[Product] Filiter Products',
  props<{ filterObj: any }>()
);

// Set Current Product
export const setCurrentProduct = createAction(
  '[Product] Set Current Product',
  props<{ product: Product }>()
);

// Clear Current Product
export const clearCurrentProduct = createAction(
  '[Product] Clear Current Product'
);

// Set Loading Status
export const setLoading = createAction(
  '[Product] Set Loading',
  props<{ isLoading: boolean }>()
);

// Set Error
export const setError = createAction(
  '[Product] Set Error',
  props<{ error: string }>()
);

// Clear Filtered Products
export const clearFilter = createAction('[Product] Clear Filter');
