import { NgOptimizedImage, CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { StoreItem } from '../../models/item';
import { AppStore } from '../../state/store';

@Component({
  selector: 'app-shop-item',
  imports: [MatCardModule, MatButtonModule, NgOptimizedImage, CurrencyPipe],
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.scss',
})
export class ShopItemComponent {
  public item = input.required<StoreItem>();

  public store = inject(AppStore);
}
