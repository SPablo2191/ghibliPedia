import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { selectListFilms } from 'src/app/state/selectors/films.selectors';

@Component({
  selector: 'app-ui-data-view',
  templateUrl: './ui-data-view.component.html',
  styleUrls: ['./ui-data-view.component.css'],
})
export class UiDataViewComponent implements OnInit {
  // @Input() items! : any[];
  items$: Observable<any> = new Observable();
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.getFilms();
  }
  getFilms() {
    this.items$ = this.store.select(selectListFilms);
    
  }
}
