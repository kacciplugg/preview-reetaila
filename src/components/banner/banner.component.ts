import { Component } from '@angular/core';
import { ForwardIconComponent } from '../icons/forward-icon/forward-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  imports: [ForwardIconComponent, RouterLink],
  templateUrl: './banner.component.html',
})
export class BannerComponent {}
