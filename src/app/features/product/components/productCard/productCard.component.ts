import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';
import { Rating } from 'primeng/rating';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule, Rating, NgOptimizedImage, FormsModule],
  templateUrl: './productCard.component.html',
  styleUrl: './productCard.component.scss',
})
export class ProductCardComponent {
  product = input.required<Product>();
}
