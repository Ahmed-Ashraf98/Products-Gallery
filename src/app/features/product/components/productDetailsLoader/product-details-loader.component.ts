import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';
@Component({
  selector: 'app-product-details-loader',
  imports: [CommonModule, SkeletonModule],
  templateUrl: './product-details-loader.component.html',
  styleUrl: './product-details-loader.component.scss',
})
export class ProductDetailsLoaderComponent {}
