import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from "@angular/router";
import { BooksService } from "../../services/books.service";
import { Book } from "../../models/Book";
import { FlashMessagesService } from "angular2-flash-messages";


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = {
    name: '',
    date: `${new Date()}`,
    description: '',
    price: 0,
    author: '',
    links: [
      {
        type: 'epub',
        link: ''
      },
      {
        type: 'pdf',
        link: ''
      }
    ]
  };

  @ViewChild('form') form: any;

  constructor(
    public booksService: BooksService,
    public router: Router,
    public flashMessage: FlashMessagesService,
  ) {
  }

  ngOnInit() {

  }

  addBook() {
    if (!this.form.valid) {
      this.flashMessage.show('Please enter form', {
                cssClass: 'alert-danger',
                showCloseBtn: true,
                closeOnClick: true,
                timeOut: 4000
              });
    }else {
      this.booksService.addBook(this.book);
      this.flashMessage.show('New book add success', {
                cssClass: 'alert-success',
                showCloseBtn: true,
                closeOnClick: true,
                timeOut: 4000
              });
      this.router.navigate(['/panel']);
      }
    }

    cancel() {
      this.router.navigate(['/panel']);
    }
}

