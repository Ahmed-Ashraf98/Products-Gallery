import { Component, effect, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
import { Sort, SortOption } from '../product.model';

@Component({
  selector: 'app-sort-input',
  imports: [CommonModule, FormsModule, SelectModule],
  templateUrl: './sortInput.component.html',
  styleUrl: './sortInput.component.scss',
})
export class SortInputComponent {
  selectedSort: SortOption | null = null;
  isReset = input<boolean>(false);
  sortOptions: SortOption[] = [
    { label: 'Price - Low', value: Sort.PRICE_LOW },
    { label: 'Price - High', value: Sort.PRICE_HIGH },
    { label: 'Name - Asc', value: Sort.NAME_ASC },
    { label: 'Name - Desc', value: Sort.NAME_DESC },
  ];

  constructor() {
    effect(() => {
      if (this.isReset()) {
        this.selectedSort = null;
      }
    });
  }

  onSort = output<Sort | null>();

  onSortChange() {
    this.onSort.emit(this.selectedSort ? this.selectedSort.value : null);
  }
}
