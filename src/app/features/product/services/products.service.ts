import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BASE_URL } from 'src/app/token/app.tokens';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _httpClient = inject(HttpClient);
  private readonly _baseUrl = inject(BASE_URL);

  getAllProducts() {
    return this._httpClient.get<Product[]>(`${this._baseUrl}/products`);
  }

  getProductById(id: string) {
    return this._httpClient.get<Product>(`${this._baseUrl}/products/${id}`);
  }
}
