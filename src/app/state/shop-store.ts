import {
  PartialStateUpdater,
  patchState,
  signalStoreFeature,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import {
  setEntities,
  updateEntities,
  updateEntity,
  withEntities,
} from '@ngrx/signals/entities';
import { StoreItem } from '../models/item';
import { computed, inject } from '@angular/core';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { ApiService } from '../services/api/api.service';

type State = {
  status: 'loading' | 'success' | 'error';
};

const initialState: State = {
  status: 'loading',
};

export function withShopItems<_>() {
  return signalStoreFeature(
    withState(initialState),
    withEntities<StoreItem>(),
    withComputed((store) => ({
      itemsInCart: computed(() =>
        store.entities().filter((item) => item.inCart)
      ),
    })),
    withComputed((store) => ({
      totalItemsInCart: computed(() => store.itemsInCart().length),
      totalPrice: computed(() =>
        store.itemsInCart().reduce((acc, curr) => acc + curr.price, 0)
      ),
    })),
    withMethods((store, api = inject(ApiService)) => ({
      toggleInCart(itemToUpdate: StoreItem, addToCart: boolean) {
        patchState(
          store,
          updateEntity({ id: itemToUpdate.id, changes: { inCart: addToCart } })
        );
      },
      checkout() {
        patchState(
          store,
          updateEntities({
            predicate: (item) => item.inCart === true,
            changes: { inCart: false },
          })
        );
      },
      loadData: rxMethod<void>(
        pipe(
          switchMap(() => api.load()),
          tap({
            next: (data) =>
              patchState(store, setEntities(data), setLoadSuccess()),
            error: () => patchState(store, setLoadError()),
          })
        )
      ),
    })),
    withHooks({
      onInit(store) {
        store.loadData();
      },
    })
  );
}

export function setLoadError(): PartialStateUpdater<State> {
  return (state) => ({ status: 'error' });
}

export function setLoadSuccess(): PartialStateUpdater<State> {
  return (state) => ({ status: 'success' });
}
