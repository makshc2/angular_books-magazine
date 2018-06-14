import { Component, OnInit } from '@angular/core';
import { BasketService } from "../../services/basket.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
  basketItems = [];

  constructor(
    public basketService: BasketService
  ) { }

  ngOnInit() {
    this.basketService.getBasketItem().subscribe(items =>{
      this.basketItems = items;
    });
  }

  clearBasket() {
    this.basketItems.splice(0, this.basketItems.length);
    this.basketService.clearBasketAll();
  }

  deleteBasketItem(id) {
    this.basketService.deleteItem(id);
  }

}
