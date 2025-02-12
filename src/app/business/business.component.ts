import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { ForwardIconComponent } from '../../components/icons/forward-icon/forward-icon.component';
import { MarkIconComponent } from '../../components/icons/mark-icon/mark-icon.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-business',
  imports: [
    CommonModule,
    NavbarComponent,
    NewsletterComponent,
    FooterComponent,
    BannerComponent,
    ForwardIconComponent,
    MarkIconComponent,
    RouterLink,
  ],
  templateUrl: './business.component.html',
})
export class BusinessComponent {}
