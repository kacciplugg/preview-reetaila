import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ForwardIconComponent } from '../icons/forward-icon/forward-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  imports: [ButtonComponent, ForwardIconComponent, RouterLink],
  templateUrl: './hero.component.html',
})
export class HeroComponent {}
