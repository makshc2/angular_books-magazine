import { Component, OnInit } from '@angular/core';
import { BooksService } from "../../services/books.service";
import { Book } from "../../models/Book";
import { BasketService } from "../../services/basket.service";

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
      name: book.name
    };

    this.basketService.addItem(newBasketItem).subscribe(book => {

    });
  }

  deleteBookFromBasket(id) {
    this.basketService.deleteItem(id);
  }

}
