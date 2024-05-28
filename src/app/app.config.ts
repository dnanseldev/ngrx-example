import { ApplicationConfig } from '@angular/core';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { fetchBookEffect } from './feature/book/book.effect';
import { appReducers } from './state/app.reducers';

export const appConfig: ApplicationConfig = {
  providers: [provideStore(appReducers), provideEffects({ fetchBooks: fetchBookEffect })]
};
