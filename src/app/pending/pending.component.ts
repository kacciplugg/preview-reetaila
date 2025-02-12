import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../components/footer/footer.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pending',
  imports: [
    CommonModule,
    NavbarComponent,
    NewsletterComponent,
    FooterComponent,
    BannerComponent,
    RouterLink,
  ],
  templateUrl: './pending.component.html',
})
export class PendingComponent {}
