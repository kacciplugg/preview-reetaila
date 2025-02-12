import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { ForwardIconComponent } from '../../components/icons/forward-icon/forward-icon.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-inventory',
  imports: [
    CommonModule,
    NewsletterComponent,
    FooterComponent,
    BannerComponent,
    ForwardIconComponent,
    NavbarComponent,
    RouterLink,
  ],
  templateUrl: './inventory.component.html',
})
export class InventoryComponent {
  inventoryFeatures = [
    {
      title: 'Automated Tracking',
      text: 'Keep tabs on your stock with real-time tracking to avoid overstocking or understocking.',
    },

    {
      title: 'Bulk Upload and Edits',
      text: 'Save time with adding or updating multiple products at once.',
    },
    {
      title: 'inventory Reports',
      text: 'Access detailed reports to analyze trends or optimize stock levels.',
    },
    {
      title: 'Multi-Location Support',
      text: 'Manage inventory across multiple stores or warehouses.',
    },
  ];
}
