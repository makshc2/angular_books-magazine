import { Component, OnInit } from '@angular/core';
import { BasketService } from "../../services/basket.service";
import { Router } from "@angular/router";
import { SalesService } from "../../services/sales.service";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  checkoutList = [];
  fullName = '';
  phone = '';
  email = '';
  addressIsVisible = false;
  totalSum = 0;

  constructor(
    public basketService: BasketService,
    public salesService: SalesService,
    public router: Router,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.basketService.getBasketItem().subscribe(items => {
      if(!items.length) {
        this.router.navigate(['/']);
      } else {
        this.checkoutList = items;
        this.totalSum = this.checkoutList.reduce((sum, item) => sum += item.sum, 0);
      }
    });
  }

  onChangeItemCount(item) {
    item.sum = item.price * item.count;
    this.totalSum = this.checkoutList.reduce((sum, item) => sum += item.sum, 0);
  }

  deleteItem(id) {
    this.basketService.deleteItem(id);
  }

  onSubmit() {
    const newOrder = {
      name: this.fullName,
      phone: this.phone,
      email: this.email,
      items: this.checkoutList,
      status: 'in progress'
    };

    this.salesService.addNewOrder(newOrder)
      .then(() => {
        this.router.navigate(['/']);
        this.flashMessage.show('Order success', {
          cssClass: 'alert-success',
          showCloseBtn: true,
          closeOnClick: true,
          timeOut: 4000
        });
      });

  }

}
