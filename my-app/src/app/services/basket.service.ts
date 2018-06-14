import { Injectable } from '@angular/core';
import { of } from "rxjs/observable/of";
import { Book } from "../models/Book";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class BasketService {
  purchaseList: Book[] = [];
  private clearSource = new BehaviorSubject(false);
  clearAllItemsEvent = this.clearSource.asObservable();
  private deleteSource = new BehaviorSubject('');
  deleteItemEvent = this.deleteSource.asObservable();

  constructor() { }

  getBasketItem() {
    return of(this.purchaseList);
  }

  addItem(book) {
    this.purchaseList.push(book);
    return of(book);
  }

  deleteItem(id) {
    for(let i = 0; i < this.purchaseList.length; i++){
      if (this.purchaseList[i].id === id) {
        this.purchaseList.splice(i, 1);
        break;
      }
    }
    this.deleteSource.next(id);
  }

  clearBasketAll() {
    this.clearSource.next(true);
  }

}
