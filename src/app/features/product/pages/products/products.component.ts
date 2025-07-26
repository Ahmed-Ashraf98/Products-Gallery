import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';
import * as ProductActions from '../../../../store/product/product.actions';
import * as ProductSelectors from '../../../../store/product/product.selectors';
import { ProductsService } from '../../services/products.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import { ProductCardComponent } from '../../components/productCard/productCard.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AsyncPipe } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
import { LoadingProductCardComponent } from '../../components/loadingProductCard/loadingProductCard.component';

@Component({
  selector: 'app-products',
  imports: [
    CommonModule,
    ProductCardComponent,
    AsyncPipe,
    SkeletonModule,
    LoadingProductCardComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  // private readonly _productsService = inject(ProductsService);
  // private readonly _destroy$ = new Subject<void>();
  private readonly _router = inject(Router);
  private readonly _store = inject(Store);
  products$!: Observable<Product[]>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  getProducts() {
    this.products$ = this._store.select(ProductSelectors.selectProducts);
    // this._store.select(ProductSelectors.selectProducts).subscribe({
    //   next: (r) => {
    //     console.log(r);
    //   },
    // });
  }

  getLoading() {
    this.isLoading$ = this._store.select(ProductSelectors.selectLoading);
  }

  getError() {
    this.error$ = this._store.select(ProductSelectors.selectError);
  }

  fetchAllProducts() {
    this._store.dispatch(ProductActions.loadProducts());
    // this._productsService
    //   .getAllProducts()
    //   .pipe(takeUntil(this._destroy$))
    //   .subscribe({
    //     next: (productsList) => {
    //       this.products = productsList;
    //     },
    //     error: (error) => {
    //       console.error('Error fetching products:', error);
    //     },
    //   });
  }

  goToProductDetailsPage(productId: number) {
    this._router.navigate(['main/products', productId]);
  }

  ngOnInit(): void {
    this.fetchAllProducts();
    this.getLoading();
    this.getError();
    this.getProducts();
  }
}
