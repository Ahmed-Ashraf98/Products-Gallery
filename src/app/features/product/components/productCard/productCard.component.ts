import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';
import { Rating } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule, Rating, FormsModule, ButtonModule],
  templateUrl: './productCard.component.html',
  styleUrl: './productCard.component.scss',
})
export class ProductCardComponent {
  product = input.required<Product>();
  onClick = output<number>();

  onViewDetails() {
    this.onClick.emit(this.product().id);
  }
}
