import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
  selector: 'app-loading-product-card',
  imports: [CommonModule, SkeletonModule],
  templateUrl: './loadingProductCard.component.html',
  styleUrl: './loadingProductCard.component.scss',
})
export class LoadingProductCardComponent {}
