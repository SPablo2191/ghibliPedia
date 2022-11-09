import { createReducer, on } from '@ngrx/store';
import { FilmsState } from 'src/app/models/Film';
import { loadedFilms, loadFilms } from '../actions/films.actions';

export const initialState: FilmsState = { loading: false, items: [] };

export const filmsReducer = createReducer(
  initialState,
  on(loadFilms, (state) => {
    // aca se deberia cargar la api
    return { ...state, loading: true }; // => generas un nuevo estado ...state
  }),
  on(loadedFilms, (state,{films}) => { //{films} => solo metrae las pelis del prop
    // aca se deberia cargar la api
    return { ...state, loading: false , films }; // => generas un nuevo estado ...state
  })
);
