import { Injectable } from '@angular/core';
import { Item } from '../models/item';

export const serverItems: Item[] = [
  {
    id: 1,
    name: 'Coffee Mug Green',
    price: 14.99,
    image: 'coffee mug green.png',
  },
  {
    id: 2,
    name: 'Coffee Mug Multi Color',
    price: 18.99,
    image: 'coffee mug multi color.png',
  },
  {
    id: 3,
    name: 'Coffee Mug Teal',
    price: 21.99,
    image: 'coffee mug teal.png',
  },
  {
    id: 4,
    name: 'Coffee Mug Yellow',
    price: 19.99,
    image: 'coffee mug yellow.png',
  },
];
