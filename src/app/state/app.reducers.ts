import { ActionReducerMap } from "@ngrx/store";
import { bookReducer } from "../feature/book/book.reducer";
import { IAppSate } from "./app.state";

export const appReducers: ActionReducerMap<IAppSate> = {
  Books: bookReducer
};