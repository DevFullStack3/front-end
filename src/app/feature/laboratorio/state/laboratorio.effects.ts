import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {inject} from '@angular/core';
import {Laboratorio} from './laboratorio.model';
import {laboratorioActions} from './laboratorio.actions';
import {map, mergeMap, of} from 'rxjs';

export default class LaboratorioEffects {
  usuario = 'admin';
  password = 'admin123';

  basicAuth = 'Basic ' + btoa(`${this.usuario}:${this.password}`);

  headers = new HttpHeaders({
    Authorization: this.basicAuth,
    content_type: 'application/json'
  });

  actions$: Actions<Action<string>> = inject(Actions);

  private _http = inject(HttpClient);

  readonly listarLaboratorios$ = createEffect( () => this.actions$.pipe(
    ofType(laboratorioActions.listarLaboratorios),
    mergeMap(() => this._http.get<Laboratorio[]>('/laboratorio', { headers: this.headers })
      .pipe(
        map(laboratorios => laboratorioActions.listarLaboratoriosOk({laboratorios}))
      ))
  ));
}
