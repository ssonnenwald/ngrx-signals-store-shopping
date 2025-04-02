import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Item } from '../../models/item';
import { AppStore } from '../../state/store';

@Component({
  selector: 'app-cart-item',
  imports: [CurrencyPipe, NgOptimizedImage, MatCardModule, MatButtonModule],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  public item = input.required<Item>();

  public store = inject(AppStore);
}
