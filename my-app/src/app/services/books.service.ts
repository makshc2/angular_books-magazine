import { Injectable } from '@angular/core';
import { of } from "rxjs/observable/of";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Book } from "../models/Book";
import {Observable} from "rxjs/Observable";

@Injectable()
export class BooksService {
  booksCollection: AngularFirestoreCollection<Book>;
  bookDoc: AngularFirestoreDocument<Book>;
  books: Observable<Book>;
  book: Observable<Book[]>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.booksCollection = this.afs.collection('books');
  }

  getBooks() {
    this.books = this.booksCollection.snapshotChanges().map(collection => {

      return collection.map(document => {
        const data = document.payload.doc.data() as Book;
        data.id = document.payload.doc.id;
        return data;
        });
      });
    return this.books
  }

  getBookById(id:string) {
    const book = this.books.find(book => book.id === id);
    return of(book);
  }

  addBook(book: Book) {
    this.books.unshift(book);
    return of(book);
  }

  editBook(book: Book) {
    this.books = this.books.map(item => {
      if(item.id === book.id) {
        item = book;
      }
      return item;
    });
    return of(book);
  }

  deleteBook(id: string){

  }

}
