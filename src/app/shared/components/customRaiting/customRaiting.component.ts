import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-raiting',
  imports: [CommonModule],
  templateUrl: './customRaiting.component.html',
  styleUrl: './customRaiting.component.scss',
})
export class CustomRaitingComponent {
  rating = input.required<number>();
}
