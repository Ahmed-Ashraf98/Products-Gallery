import { createReducer, on } from '@ngrx/store';
import { initialProductState } from './product.state';
import * as ProductActions from './product.actions';

export const productReducer = createReducer(
  initialProductState,

  on(ProductActions.setProducts, (state, { products }) => ({
    ...state,
    products,
  })),

  on(ProductActions.filiterProducts, (state, { filterObj }) => ({
    ...state,
    filteredProducts: [],
  })),

  on(ProductActions.clearFilter, (state) => ({
    ...state,
    filteredProducts: [],
  })),

  on(ProductActions.setCurrentProduct, (state, { product }) => ({
    ...state,
    currentProduct: product,
  })),

  on(ProductActions.clearCurrentProduct, (state) => ({
    ...state,
    currentProduct: null,
  })),

  on(ProductActions.setLoading, (state, { isLoading }) => ({
    ...state,
    isLoading,
  })),

  on(ProductActions.setError, (state, { error }) => ({
    ...state,
    error,
  })),

  on(ProductActions.clearError, (state) => ({
    ...state,
    error: null,
  }))
);
