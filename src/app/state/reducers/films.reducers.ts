import { createReducer, on } from '@ngrx/store';
import { Film } from 'src/app/models/Film';

export const initialState: ReadonlyArray<Film> = [];

// export const booksReducer = createReducer(
//   initialState,
//   on(retrievedBookList, (state, { books }) => books)
// );