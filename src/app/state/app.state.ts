import { ActionReducerMap } from '@ngrx/store';
import {  FilmsState } from '../models/Film';
import { filmsReducer } from './reducers/films.reducers';
// ---------STORE-----------
// los datos que cualquier componente quiera consumir estan aqui => Base de datos
export interface AppState {
  films: FilmsState; // => es una tabla -> sigue la interfa< definida en models 
}

export const ROOT_REDUCERS : ActionReducerMap<AppState> = {
    films : filmsReducer
} //aqui se va a llamar los reducers que trabajan con el store (cada key del json hace alusion a una "tabla" de mis datos)