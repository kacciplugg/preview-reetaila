import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-waitlist-success',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NavbarComponent,
    FooterComponent,
    RouterLink,
  ],
  templateUrl: './waitlist-success.component.html',
})
export class WaitlistSuccessComponent implements OnInit {
  ngOnInit() {
    // Try multiple approaches to ensure scroll reset
    setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }, 0);
  }

  constructor() {
    // Also try on construction
    window.scrollTo(0, 0);
  }
}
