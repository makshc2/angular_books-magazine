import { Component, OnInit } from '@angular/core';
import { BooksService } from "../../services/books.service";
import { Book } from "../../models/Book";
import { CurrencyService } from "../../services/currency.service";
import { Currency } from "../../models/Currency";
import { FlashMessagesService } from "angular2-flash-messages";


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  books: Book[];
  searchingResult: Book[] = [];
  searchText: string;
  currentCurrency : Currency;

  constructor(
    public bookService: BooksService,
    public currencyService: CurrencyService,
    public flashMessages: FlashMessagesService
  ) { }

  ngOnInit() {
    this.bookService.getBooks().subscribe((books: Book[]) => this.books = books);
    this.currencyService.selectedCurrency.subscribe(data => {
      this.currentCurrency = Object.create(data.find(obj => obj.isActive));
    });
  }

  searchBook() {
    this.searchingResult = this.books.filter(book => book.name.toLowerCase().indexOf(this.searchText) !== -1);
  }

  deleteBook(book: Book) {
    this.bookService.deleteBook(book)
      .then(() => {
        this.flashMessages.show('Book has been successfully deleted!', {
          cssClass: 'alert-success',
          showCloseBtn: true,
          closeOnClick: true,
          timeout: 4000
        });
        this.searchText = '';
      })
  }
}
