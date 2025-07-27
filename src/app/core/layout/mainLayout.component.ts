import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../components/navbar/navbar.component';

@Component({
  selector: 'app-main-layout',
  imports: [CommonModule, RouterModule, NavbarComponent],
  templateUrl: './mainLayout.component.html',
  styleUrl: './mainLayout.component.scss',
})
export class MainLayoutComponent {}
