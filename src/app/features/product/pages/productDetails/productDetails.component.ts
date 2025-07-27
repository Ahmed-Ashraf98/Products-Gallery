import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../product.model';
import { Observable, Subject, takeUntil } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ProductActions from '../../../../store/product/product.actions';
import * as ProductSelectors from '../../../../store/product/product.selectors';
import { Rating } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ProductDetailsLoaderComponent } from '../../components/productDetailsLoader/product-details-loader.component';
import { ButtonModule } from 'primeng/button';
import { CustomRaitingComponent } from 'src/app/shared/components/customRaiting/customRaiting.component';
@Component({
  selector: 'app-product-details',
  imports: [
    CommonModule,
    Rating,
    FormsModule,
    ProductDetailsLoaderComponent,
    ButtonModule,
    CustomRaitingComponent,
  ],
  templateUrl: './productDetails.component.html',
  styleUrl: './productDetails.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);
  private readonly _store = inject(Store);
  private readonly _router = inject(Router);
  private readonly _destroy$ = new Subject<void>();

  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  productId: string | null = null;

  product!: Product;

  getProductIdFromRoute() {
    this.productId = this._activatedRoute.snapshot.paramMap.get('id');
    if (!this.productId) {
      console.error('Product ID not found in route parameters');
    }
  }

  fetchProductById() {
    this._store.dispatch(
      ProductActions.getProductById({ id: Number(this.productId) })
    );
  }

  getProduct() {
    this._store
      .select(ProductSelectors.selectCurrentProduct)
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (res) => {
          this.product = res!;
        },
      });
  }

  getLoading() {
    this.isLoading$ = this._store.select(ProductSelectors.selectLoading);
  }

  getError() {
    this.error$ = this._store.select(ProductSelectors.selectError);
  }

  goBack() {
    this._router.navigate(['main/products']);
  }

  ngOnInit(): void {
    this.getProductIdFromRoute();
    this.fetchProductById();
    this.getLoading();
    this.getError();
    this.getProduct();
  }
}
