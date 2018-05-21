import { Injectable } from '@angular/core';
import { of } from "rxjs/observable/of";
import { Book } from "../models/Book";

@Injectable()
export class BooksService {
  books: Book [] = [
    {
      id: '71e9a7bc-fbe8-4384-842f-65a17aed5e0e',
      name: 'Выразительный JavaScript',
      author: 'Marijn Haverbeke',
      description: 'Lorem lorem',
      link: [
        {
          type: 'epub',
          link: 'link'
        },
        {
          type: 'pdf',
          link: 'link'
        },
      ]
    }
  ];

  constructor() { }

  getBooks() {
    return of(this.books)
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
