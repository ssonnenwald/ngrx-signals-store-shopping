import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CartItemComponent } from '../cart-item/cart-item.component';
import { AppStore } from '../../state/store';

@Component({
  selector: 'app-cart',
  imports: [CurrencyPipe, MatButtonModule, CartItemComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  public store = inject(AppStore);

  public checkOut(): void {
    this.store.checkout();
  }
}
