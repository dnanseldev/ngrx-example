import { IAppSate } from "../../state/app.state";

export const bookSelector = (appState: IAppSate) => {
  return appState.Books.books;
};