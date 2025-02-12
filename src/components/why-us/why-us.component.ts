import { Component } from '@angular/core';
import { ForwardIconComponent } from '../icons/forward-icon/forward-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-why-us',
  imports: [ForwardIconComponent, RouterLink],
  templateUrl: './why-us.component.html',
})
export class WhyUsComponent {}
