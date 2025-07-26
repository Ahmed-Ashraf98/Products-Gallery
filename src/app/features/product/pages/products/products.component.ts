import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';
import { ProductsService } from '../../services/products.service';
import { Subject, takeUntil } from 'rxjs';
import { ProductCardComponent } from '../../components/productCard/productCard.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  private readonly _productsService = inject(ProductsService);
  private readonly _destroy$ = new Subject<void>();
  private readonly _router = inject(Router);

  fetchAllProducts() {
    this._productsService
      .getAllProducts()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (productsList) => {
          this.products = productsList;
        },
        error: (error) => {
          console.error('Error fetching products:', error);
        },
      });
  }

  goToProductDetailsPage(productId: number) {
    this._router.navigate(['main/products', productId]);
  }

  ngOnInit(): void {
    this.fetchAllProducts();
  }
}
