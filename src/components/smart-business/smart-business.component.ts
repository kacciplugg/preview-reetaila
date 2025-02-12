import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ForwardIconComponent } from '../icons/forward-icon/forward-icon.component';
import { MarkIconComponent } from '../icons/mark-icon/mark-icon.component';
import { ButtonComponent } from '../button/button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-smart-business',
  imports: [
    NgFor,
    ForwardIconComponent,
    MarkIconComponent,
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: './smart-business.component.html',
})
export class SmartBusinessComponent {}
