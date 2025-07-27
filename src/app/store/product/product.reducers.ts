import { createReducer, on } from '@ngrx/store';
import { initialProductState } from './product.state';
import * as ProductActions from './product.actions';
import {
  FiliterData,
  Product,
  Sort,
} from 'src/app/features/product/product.model';

export const productReducer = createReducer(
  initialProductState,

  on(ProductActions.setProducts, (state, { products }) => ({
    ...state,
    products,
  })),

  on(ProductActions.filiterProducts, (state, { filterObj }) => ({
    ...state,
    filteredProducts: filterProducts(state.products, filterObj),
    isFilterApplied: true,
  })),

  on(ProductActions.clearFilter, (state) => ({
    ...state,
    filteredProducts: [],
    isFilterApplied: false,
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

const filterProducts = (
  products: Product[],
  filterObj: FiliterData
): Product[] => {
  const searchTxt = filterObj.searchText?.toLowerCase();
  const sortOption = filterObj.sort;

  let filtered = [...products];

  if (searchTxt !== '' && searchTxt !== undefined) {
    filtered = filtered.filter((prod) =>
      prod.title.toLowerCase().includes(searchTxt)
    );
  }

  if (sortOption !== null) {
    filtered = filtered.sort((a, b) => {
      switch (sortOption) {
        case Sort.PRICE_LOW:
          return a.price - b.price;
        case Sort.PRICE_HIGH:
          return b.price - a.price;
        case Sort.NAME_ASC:
          return a.title.localeCompare(b.title);
        case Sort.NAME_DESC:
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });
  }

  return filtered;
};
