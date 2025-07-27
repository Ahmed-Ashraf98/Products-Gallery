import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';

export const selectProductState =
  createFeatureSelector<ProductState>('product');

export const selectProducts = createSelector(selectProductState, (state) =>
  state.isFilterApplied ? state.filteredProducts : state.products
);

export const selectCurrentProduct = createSelector(
  selectProductState,
  (state) => state.currentProduct
);

export const selectLoading = createSelector(
  selectProductState,
  (state) => state.isLoading
);

export const selectError = createSelector(
  selectProductState,
  (state) => state.error
);
