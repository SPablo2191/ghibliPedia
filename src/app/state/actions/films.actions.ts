import { createAction, props } from '@ngrx/store';
import { Film } from 'src/app/models/Film';

 
export const loadFilms = createAction(
  '[Film List] Load films'
);
export const loadedFilms = createAction(
    '[Film List] Loaded Success',
    props<{films : Film []}>()
);
 
// export const removeBook = createAction(
//   '[Book Collection] Remove Book',
//   props<{ bookId: string }>()
// );
 
// export const retrievedBookList = createAction(
//   '[Book List/API] Retrieve Books Success',
//   props<{ books: ReadonlyArray<Book> }>()
// );