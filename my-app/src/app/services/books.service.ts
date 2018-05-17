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

  }

  addBook(book: Book) {

  }

  editBook(book: Book) {

  }

  deleteBook(id: string){

  }

}
