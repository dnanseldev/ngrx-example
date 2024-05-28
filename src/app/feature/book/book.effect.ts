import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { BookService } from "../../services/book.service";
import { bookActions } from "./book.actions";

export const fetchBookEffect = createEffect(
  (actions$ = inject(Actions), bookService = inject(BookService)) => {
    return actions$.pipe(
      ofType(bookActions.loadBooks),
      switchMap(() =>
        bookService.obtainBooksAPI.pipe(
          map((books) => bookActions.loadBooksSuccess({ books })),
          //catchError((error) => of(bookActions.loadBooksError({ error })))
        )
      )
    );
  },
  { functional: true }
);