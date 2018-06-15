import { Component, OnInit } from '@angular/core';
import { BooksService } from "../../services/books.service";
import { Book } from "../../models/Book";
import { BasketService } from "../../services/basket.service";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-client-home',
  templateUrl: './client-home.component.html',
  styleUrls: ['./client-home.component.css']
})
export class ClientHomeComponent implements OnInit {
  books: Book[] = [];
  basketItems = [];

  constructor(
    public bookService: BooksService,
    public basketService: BasketService,
    public flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    this.basketService.getBasketItem().subscribe(items => {
      if(items.length) {
        this.basketItems = items;
      }
    });

    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
      if(this.basketItems.length) {
        this.basketItems.forEach(item => {
          this.books.forEach(book => {
            if(book.id === item.id) {
              book.isAddBasket = true;
            }
          });
        });
      }
    });

    this.basketService.clearAllItemsEvent.subscribe(status => {
      if(status) {
        this.books.forEach(book => book.isAddBasket = false);
      }
    });

    this.basketService.deleteItemEvent.subscribe(id => {
      if(id){
        this.books.forEach(book => {
          if(book.id === id) {
            book.isAddBasket = false;
          }
        });
      }
    });
  }

  addBook(book) {
    const newBasketItem = {
      id: book.id,
      price: book.price,
      name: book.name,
      sum: book.price,
      count: 1
    };

    this.basketService.addItem(newBasketItem).subscribe(book => {
      this.flashMessage.show('Add book success', {
        cssClass: 'alert-success',
        showCloseBtn: true,
        closeOnClick: true,
        timeOut: 4000
      });
    });
  }

  deleteBookFromBasket(id) {
    this.basketService.deleteItem(id);
  }

}
