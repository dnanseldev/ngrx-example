import { createAction, props } from "@ngrx/store";
import { BookModel } from "./book.model";

const loadBooks = createAction('[Books] Load books');
const loadBooksSuccess = createAction('[Books] Load books successfully', props<{ books: BookModel[]; }>());
const saveBooks = createAction(
  '[books] Add books',
  props<BookModel>()
);

export const bookActions = {
  loadBooks,
  loadBooksSuccess,
  saveBooks,
};