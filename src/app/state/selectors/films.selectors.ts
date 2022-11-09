import { createSelector } from '@ngrx/store'; //crea al selector
import { FilmsState } from 'src/app/models/Film';
import { AppState } from '../app.state';
//Selector con relacion a la propiedad (tabla)  films
export const selectFilmsFeature = (state: AppState) => state.films; // <-- selector padre

export const selectListFilms = createSelector( //aca añadis los selectors
  selectFilmsFeature,
  (state: FilmsState) => state.items //con esto solo traemos los items <-- selector hijo
);
export const selectLoading = createSelector( //aca añadis los selectors
  selectFilmsFeature,
  (state: FilmsState) => state.loading //con esto solo traemos los items <-- selector hijo
);

// export interface AppState { //ya la tenemos en app.state.ts
//   feature: FeatureState;
// }

