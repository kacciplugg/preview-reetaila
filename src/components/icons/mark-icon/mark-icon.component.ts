import { Component, input } from '@angular/core';

@Component({
  selector: 'app-mark-icon',
  standalone: true,
  imports: [],
  templateUrl: './mark-icon.component.html',
})
export class MarkIconComponent {
  class = input('w-6 h-6');
}
