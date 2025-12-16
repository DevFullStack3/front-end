import {Action} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';
import {
  addUsuarioAction,
  addUsuarioOkAction,
  deleteUsuarioAction, deleteUsuarioOkAction,
  listUsuarioAction,
  listUsuarioOkAction
} from './usuario.actions';
import {map, mergeMap, of, switchMap} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UsuarioModel} from './usuario.model';


export default class UsuarioEffects {
  usuario = 'admin';
  password = 'admin123';

  basicAuth = 'Basic ' + btoa(`${this.usuario}:${this.password}`);

  headers = new HttpHeaders({
    Authorization: this.basicAuth
  });

  actions$: Actions<Action<string>> = inject(Actions);

  private _http = inject(HttpClient);

  readonly addUsuario$ = createEffect(() => this.actions$.pipe(
    ofType(addUsuarioAction),
    switchMap((action) =>
      this._http.post<UsuarioModel>('/usuario', action, { headers: this.headers }).pipe(
        map(usuario => addUsuarioOkAction(usuario))
      )
    )

  ));

  readonly listUsuario$ = createEffect(() => this.actions$.pipe(
    ofType(listUsuarioAction),
    mergeMap(() => this._http.get<UsuarioModel[]>('/usuario', { headers: this.headers })
      .pipe(
        map(usuarios => listUsuarioOkAction({usuarios}))
      ))
  ));

  readonly deleteUsuario$ = createEffect(() => this.actions$.pipe(
    ofType(deleteUsuarioAction),
    switchMap((id) => this._http.delete('/usuario', { headers: this.headers, body: id }).pipe(
      map(() => deleteUsuarioOkAction(id))
    ))
  ));
}
