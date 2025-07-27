import { Component, effect, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputGroup } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-search-input',
  imports: [
    CommonModule,
    FormsModule,
    InputGroup,
    InputGroupAddonModule,
    InputTextModule,
    ButtonModule,
  ],
  templateUrl: './searchInput.component.html',
  styleUrl: './searchInput.component.scss',
})
export class SearchInputComponent {
  searchText = '';
  isReset = input<boolean>(false);
  onSearch = output<string>();
  constructor() {
    effect(() => {
      if (this.isReset()) {
        this.searchText = '';
      }
    });
  }
  onSearchChange() {
    this.onSearch.emit(this.searchText);
  }
}
