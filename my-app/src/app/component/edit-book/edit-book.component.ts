import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BooksService } from "../../services/books.service";
import { Book } from "../../models/Book";
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  bookId: string;
  book: Book;

  constructor(
    public booksService: BooksService,
    public activatedRouter: ActivatedRoute,
    public router: Router,
    public flashMessage: FlashMessagesService,) { }

  ngOnInit() {
    this.bookId = this.activatedRouter.snapshot.params['id'];
    this.booksService.getBookById(this.bookId).subscribe( (data: Book) => this.book = Object.assign({}, data));
  }

  editBook() {
    const updateBook = Object.assign({}, this.book);
    this.booksService.editBook(updateBook)
    .then(() => {
      this.flashMessage.show('Edit book success', {
        cssClass: 'alert-success',
        showCloseBtn: true,
        closeOnClick: true,
        timeOut: 4000
      });
      this.router.navigate(['/panel']);
      });
  }

  cancel() {
    this.router.navigate(['/panel']);
  }

}
