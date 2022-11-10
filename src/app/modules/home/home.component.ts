import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/Film';
import { map, Observable } from 'rxjs';
import { DataGhibliService } from 'src/app/services/data-ghibli.service';
import { Store } from '@ngrx/store';
import { loadedFilms, loadFilms } from 'src/app/state/actions/films.actions';
import { selectLoading } from 'src/app/state/selectors/films.selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  films: Film[] = [];
  loading$: Observable<boolean> = new Observable();
  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading); 
    this.store.dispatch(loadFilms());
  }
}
