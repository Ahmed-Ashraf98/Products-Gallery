import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/features/product/product.model';

// Load Products
export const loadProducts = createAction('[Product] Load Products');

// Load Current Products
export const getProductById = createAction(
  '[Product] Load Current Products',
  props<{ id: number }>()
);

// Set Products
export const setProducts = createAction(
  '[Product] Set Products',
  props<{ products: Product[] }>()
);

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

// Set Error
export const clearError = createAction('[Product] Clear Error');

// Clear Filtered Products
export const clearFilter = createAction('[Product] Clear Filter');
