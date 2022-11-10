import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DataGhibliService } from 'src/app/services/data-ghibli.service';
import * as filmActions from '../actions/films.actions';

@Injectable()
export class FilmEffects {
  constructor(
    private actions$: Actions,
    private filmService: DataGhibliService
  ) {}
  loadFilms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(filmActions.loadFilms), // aqui desencadena el cargando
      mergeMap(() =>
        this.filmService
          .getFilms() // mergeMap => combina los 2 observables
          .pipe(
            map((films) => filmActions.loadedFilms({ films })), // aca entro la informacion ya de manera correcta
            catchError(() => EMPTY)
          )
      )
    )
  );
}
