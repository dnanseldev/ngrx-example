import { createReducer, on } from '@ngrx/store';
import { bookActions } from './book.actions';
import { BookModel } from './book.model';

enum BookStatus {
  LOADING = 'Loading',
  SUCCESS = 'success',
  ERROR = 'error',
  PENDING = 'pending'
}

export interface BookState {
  books: BookModel[];
  error: '' | null;
  status: BookStatus;
}

const initialState: BookState = {
  books: [],
  error: null,
  status: BookStatus.PENDING,
};

export const bookReducer = createReducer(
  initialState,
  on(bookActions.loadBooks, (curState) => {
    return {
      ...curState,
      status: BookStatus.LOADING
    };
  }),
  on(bookActions.loadBooksSuccess, (curState, bookObj) => {
    return {
      ...curState,
      books: bookObj.books,
      status: BookStatus.SUCCESS
    };
  }),
  on(bookActions.saveBooks, (curState, book) => {
    return {
      ...curState,
      books: [...curState.books, book],
      status: BookStatus.SUCCESS
    };
  })
);

/* 
const initialBooks: BookModel[] = [
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
]; */