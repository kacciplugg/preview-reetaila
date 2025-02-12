import { Component } from '@angular/core';
import { ForwardIconComponent } from '../icons/forward-icon/forward-icon.component';
import { MarkIconComponent } from '../icons/mark-icon/mark-icon.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-features',
  imports: [ForwardIconComponent, MarkIconComponent, NgFor],
  templateUrl: './features.component.html',
})
export class FeaturesComponent {}
