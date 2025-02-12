import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  HostListener,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import Typed from 'typed.js';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { ProductsComponent } from '../../components/products/products.component';
import { CompanionComponent } from '../../components/companion/companion.component';
import { HeroComponent } from '../../components/hero/hero.component';
import { SmartBusinessComponent } from '../../components/smart-business/smart-business.component';
// import { TestimoniesComponent } from '../../components/testimonies/testimonies.component';
import { WhyUsComponent } from '../../components/why-us/why-us.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    NewsletterComponent,
    FeaturesComponent,
    ProductsComponent,
    CompanionComponent,
    HeroComponent,
    SmartBusinessComponent,
    // TestimoniesComponent,
    WhyUsComponent,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: string) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const options = {
        strings: ['build', 'grow', 'thrive'],
        typeSpeed: 100,
        backSpeed: 40,
        showCursor: false,
        cursorChar: '_',
        loop: true,
      };
      new Typed('.typed', options);
    }
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}
