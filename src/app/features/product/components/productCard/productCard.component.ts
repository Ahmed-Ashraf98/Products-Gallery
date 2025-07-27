import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product.model';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CustomRaitingComponent } from 'src/app/shared/components/customRaiting/customRaiting.component';
@Component({
  selector: 'app-product-card',
  imports: [CommonModule, FormsModule, ButtonModule, CustomRaitingComponent],
  templateUrl: './productCard.component.html',
  styleUrl: './productCard.component.scss',
})
export class ProductCardComponent {
  product = input.required<Product>();
  onViewClick = output<number>();

  onViewDetails() {
    this.onViewClick.emit(this.product().id);
  }
}
