import { Component, inject, Signal } from '@angular/core';
import { ShopItemComponent } from '../shop-item/shop-item.component';
import { AppStore } from '../../state/store';
import { StoreItem } from '../../models/item';

@Component({
  selector: 'app-shop',
  imports: [ShopItemComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {
  public store = inject(AppStore);

  public items: Signal<StoreItem[]> = this.store.entities;
  public status: Signal<'loading' | 'success' | 'error'> = this.store.status;
}
