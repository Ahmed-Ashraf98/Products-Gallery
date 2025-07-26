import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './productDetails.component.html',
  styleUrl: './productDetails.component.scss',
})
export class ProductDetailsComponent implements OnInit {
  private readonly _activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  productId: string | null = null;

  getProductIdFromRoute() {
    this.productId = this._activatedRoute.snapshot.paramMap.get('id');
    if (!this.productId) {
      console.error('Product ID not found in route parameters');
    }
  }

  ngOnInit(): void {}
}
