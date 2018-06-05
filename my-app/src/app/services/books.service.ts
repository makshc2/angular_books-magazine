import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Book } from "../models/Book";
import { Observable } from "rxjs/Observable";

@Injectable()
export class BooksService {
  booksCollection: AngularFirestoreCollection<Book>;
  bookDoc: AngularFirestoreDocument<Book>;
  books: Observable<Book[]>;
  book: Observable<Book>;

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

    return this.books;
  }

  getBookById(id:string): Observable<Book>  {
   this.bookDoc = this.afs.doc<Book>(`books/${id}`);
   this.book = this.bookDoc.snapshotChanges().map(action => {
     if(action.payload.exists === false) {
       return null;
     } else {
       const data = action.payload.data() as Book;
       data.id = action.payload.id;
       return data;
     }
   });
   return this.book;
  }

  addBook(book) {
    this.booksCollection.add(book);
  }

  editBook(book: Book) {
    return this.afs.doc(`books/${book.id}`).update(book);
  }

  deleteBook(book: Book) {
    return this.afs.doc(`books/${book.id}`).delete();
  }

}
