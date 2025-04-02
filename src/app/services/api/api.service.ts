import { Injectable } from '@angular/core';
import { serverItems } from '../../data/item-data';
import { Item } from '../../models/item';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  public load(): Observable<Item[]> {
    return of(serverItems).pipe(delay(2000));
  }
}
