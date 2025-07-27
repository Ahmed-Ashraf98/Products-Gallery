import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { ThemeManagerService } from 'src/app/shared/services/theme/theme-manager.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, ToggleButtonModule, ToggleSwitchModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  themeVal: boolean = false;
  private readonly _themeManager = inject(ThemeManagerService);
  toggleTheme() {
    // this.themeVal = !this.themeVal;
    console.log(this.themeVal);
    this._themeManager.toggleTheme();
  }
  getUserPrefFromCookies() {
    const theme = this._themeManager.getCurrentTheme();

    if (theme == 'dark') {
      this.themeVal = true;
    }
  }

  ngOnInit(): void {
    this._themeManager.initTheme();
    this.getUserPrefFromCookies();
  }
}
