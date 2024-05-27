import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { BookModel } from '../feature/book/book.model';

@Injectable({ providedIn: 'root' })
export class BookService {
  books: BookModel[] = [
    {
      id: 1,
      name: 'Book 1',
    },
    {
      id: 2,
      name: 'Book 2',
    },
    {
      id: 3,
      name: 'Book 3',
    },
  ];

  get obtainBooksAPI(): Observable<BookModel[]> {
    return of(this.books.slice()).pipe(delay(1000));
  }
}
