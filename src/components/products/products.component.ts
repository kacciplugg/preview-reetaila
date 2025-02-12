import { Component } from '@angular/core';
import { ForwardIconComponent } from '../icons/forward-icon/forward-icon.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  imports: [ForwardIconComponent, NgFor],
  templateUrl: './products.component.html',
})
export class ProductsComponent {}
