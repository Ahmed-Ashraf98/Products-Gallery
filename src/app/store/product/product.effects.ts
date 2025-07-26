import { inject, Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap, withLatestFrom } from 'rxjs';
import * as ProductActions from './product.actions';
import * as ProductSelectors from './product.selectors';
import { Store } from '@ngrx/store';
import { ProductsService } from 'src/app/features/product/services/products.service';

@Injectable()
export class ProductEffects {
  private readonly _actions$ = inject(Actions);
  private readonly _productService = inject(ProductsService);
  // private readonly _store = inject(Store);

  readonly fetchDataEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProductActions.loadProducts, ProductActions.loadCurrentProducts),
      map(() => {
        return ProductActions.setLoading({ isLoading: true });
      })
    )
  );

  readonly setDataEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProductActions.setProducts, ProductActions.setCurrentProduct),
      map(() => {
        return ProductActions.setLoading({ isLoading: false });
      })
    )
  );

  readonly onSetSuccessEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProductActions.setProducts, ProductActions.setCurrentProduct),
      map(() => ProductActions.clearError())
    )
  );

  readonly loadProductsEffect$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProductActions.loadProducts),
      switchMap(() =>
        this._productService.getAllProducts().pipe(
          map((dataRes) => {
            return ProductActions.setProducts({
              products: dataRes,
            });
          }),
          catchError(() => {
            return of(
              ProductActions.setError({ error: 'Unable to load products' })
            );
          })
        )
      )
    )
  );

  readonly loadCurrentProduct$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ProductActions.loadCurrentProducts),
      switchMap((action) =>
        this._productService.getProductById(action.id).pipe(
          map((dataRes) => {
            return ProductActions.setCurrentProduct({
              product: dataRes,
            });
          }),
          catchError(() => {
            return of(
              ProductActions.setError({
                error: 'Unable to load product details',
              })
            );
          })
        )
      )
    )
  );
}
