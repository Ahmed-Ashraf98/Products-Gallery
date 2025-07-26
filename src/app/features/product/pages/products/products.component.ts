import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product, Sort } from '../../product.model';
import * as ProductActions from '../../../../store/product/product.actions';
import * as ProductSelectors from '../../../../store/product/product.selectors';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../../components/productCard/productCard.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { LoadingProductCardComponent } from '../../components/loadingProductCard/loadingProductCard.component';
import { SearchInputComponent } from '../../components/searchInput/searchInput.component';
import { SortInputComponent } from '../../components/sortInput.component';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    ProductCardComponent,
    AsyncPipe,
    LoadingProductCardComponent,
    SearchInputComponent,
    SortInputComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  private readonly _router = inject(Router);
  private readonly _store = inject(Store);
  products$!: Observable<Product[]>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  getProducts() {
    this.products$ = this._store.select(ProductSelectors.selectProducts);
  }

  getLoading() {
    this.isLoading$ = this._store.select(ProductSelectors.selectLoading);
  }

  getError() {
    this.error$ = this._store.select(ProductSelectors.selectError);
  }

  fetchAllProducts() {
    this._store.dispatch(ProductActions.loadProducts());
  }

  goToProductDetailsPage(productId: number) {
    this._router.navigate(['main/products', productId]);
  }

  updateSearchFilter(searchText: string) {}

  updateSortFilter(sortOption: Sort | null) {}

  ngOnInit(): void {
    this.fetchAllProducts();
    this.getLoading();
    this.getError();
    this.getProducts();
  }
}
