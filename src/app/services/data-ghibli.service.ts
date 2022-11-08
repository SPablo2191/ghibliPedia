import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Film } from '../models/Film';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataGhibliService {
  serverUrl: string = 'https://ghibliapi.herokuapp.com';
  constructor(private httpCliente: HttpClient) {}
  public getFilms() : Observable<Film[]> {
    let endPoint = '/films';
    return this.httpCliente.get<Film []>(this.serverUrl+endPoint);
  }
}
