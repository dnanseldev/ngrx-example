import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { appReducers } from './state/app.reducers';

export const appConfig: ApplicationConfig = {
  providers: [provideStore(appReducers)]
};
