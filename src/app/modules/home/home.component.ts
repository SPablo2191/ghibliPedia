import { Component, OnInit } from '@angular/core';
import { Film } from 'src/app/models/Film';
import { map } from 'rxjs';
import { DataGhibliService } from 'src/app/services/data-ghibli.service';
import { Store } from '@ngrx/store';
import { loadedFilms } from 'src/app/state/actions/films.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  films: Film[] = [];
  constructor(private dataService: DataGhibliService,
    private store : Store<any>) {}

  ngOnInit(): void {
    this.store.dispatch(loadedFilms({films : this.films}));
    this.getFilms();
  }
  getFilms() {
    this.dataService
      .getFilms()
      .pipe(
        map((films: Film[]) => {
          this.films = films;
        })
      )
      .subscribe();
  }
}
