import { Product } from 'src/app/features/product/product.model';

export interface ProductState {
  products: Product[];
  filteredProducts: Product[];
  currentProduct: Product | null;
  isLoading: boolean;
  isFilterApplied: boolean;
  error: string | null;
}

export const initialProductState: ProductState = {
  products: [],
  filteredProducts: [],
  currentProduct: null,
  isLoading: false,
  isFilterApplied: false,
  error: null,
};
