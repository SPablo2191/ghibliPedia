import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {  HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { FilmEffects } from './state/effects/film.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({name:'TEST'}),
    EffectsModule.forRoot([FilmEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
