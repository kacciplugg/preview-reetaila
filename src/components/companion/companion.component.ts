import { Component } from '@angular/core';
import { ForwardIconComponent } from '../icons/forward-icon/forward-icon.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-companion',
  imports: [ForwardIconComponent, RouterLink],
  templateUrl: './companion.component.html',
})
export class CompanionComponent {}
