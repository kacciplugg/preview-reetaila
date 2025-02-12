import { Component, input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { DropdownIconComponent } from '../../components/icons/dropdown-icon/dropdown-icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, DropdownIconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  class = input('');
  mobileClass = input('');

  isMenuOpen = false;
  isMenuItemOpen = false;
  isMenuItem2Open = false;
  isMenuItem3Open = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen) {
      this.isMenuItemOpen = true;
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

  isScrolled = false;

  get isHomePage(): boolean {
    return this.router.url === '/';
  }

  get shouldShowWhiteBackground(): boolean {
    return !this.isHomePage || this.isScrolled;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}
