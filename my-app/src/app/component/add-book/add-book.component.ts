import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { IdService } from "../../services/id.service";
import { BooksService } from "../../services/books.service";
import {Book, BookLinks} from "../../models/Book";
import { FlashMessagesService } from "angular2-flash-messages";


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  book: Book = {
    id: this.idServise.generate(),
    name: '',
    author: '',
    description: '',
    link: [
      {
        type: 'epub',
        link: ''
      },
      {
        type: 'pdf',
        link: ''
      },
    ]
  };

  @ViewChild('form') form: any;

  constructor(
    public booksService: BooksService,
    public activatedRouter: ActivatedRoute,
    public router: Router,
    public flashMessage: FlashMessagesService,
    public idServise: IdService
  ) { }

  ngOnInit() {

  }

  addBook() {
    this.booksService.addBook(this.book).subscribe((book: Book) => {
      if(book) {
        this.flashMessage.show('New book add success', {
          cssClass: 'alert-success',
          showCloseBtn: true,
          closeOnClick: true,
          timeOut: 4000
        });
        this.router.navigate(['/panel']);
      }
    });
  }
}
