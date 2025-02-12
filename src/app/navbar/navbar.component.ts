import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DropdownIconComponent } from '../../components/icons/dropdown-icon/dropdown-icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, DropdownIconComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isMenuOpen = false;
  isMenuItemOpen = false;
  isMenuItem2Open = false;
  isMenuItem3Open = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.isMenuItemOpen = false;
      this.isMenuItem2Open = false;
      this.isMenuItem3Open = false;
    }
    this.resetScrollPosition();
  }

  toggleMenuItem() {
    this.isMenuItemOpen = !this.isMenuItemOpen;
    if (this.isMenuItemOpen) {
      this.isMenuItem2Open = false;
      this.isMenuItem3Open = false;
    }
    this.resetScrollPosition();
  }

  toggleMenuItem2() {
    this.isMenuItem2Open = !this.isMenuItem2Open;
    if (this.isMenuItem2Open) {
      this.isMenuItemOpen = false;
      this.isMenuItem3Open = false;
    }
    this.resetScrollPosition();
  }

  toggleMenuItem3() {
    this.isMenuItem3Open = !this.isMenuItem3Open;
    if (this.isMenuItem3Open) {
      this.isMenuItemOpen = false;
      this.isMenuItem2Open = false;
    }
    this.resetScrollPosition();
  }

  resetScrollPosition() {
    const navElement = document.querySelector('nav[aria-label="main"]');
    if (navElement) {
      navElement.scrollTop = 0;
    }
  }
}
