import {Action} from '@ngrx/store';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {inject} from '@angular/core';
import {
  addUsuarioAction, addUsuarioErrorAction,
  addUsuarioOkAction,
  deleteUsuarioAction, deleteUsuarioOkAction,
  listUsuarioAction,
  listUsuarioOkAction
} from './usuario.actions';
import {catchError, map, mergeMap, of, switchMap} from 'rxjs';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {UsuarioModel} from './usuario.model';


export default class UsuarioEffects {
  private get headers(): HttpHeaders {
    const token = sessionStorage.getItem('token') || '';
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }


  actions$: Actions<Action<string>> = inject(Actions);

  private _http = inject(HttpClient);

  readonly addUsuario$ = createEffect(() => this.actions$.pipe(
    ofType(addUsuarioAction),
    switchMap((action) =>
      this._http.post<UsuarioModel>('/usuario', action, { headers: this.headers }).pipe(
        map((usuario) => {
          alert('Usuario creado correctamente');
          return addUsuarioOkAction(usuario)}),
        catchError((error: HttpErrorResponse) => {
          alert(error.error.description);
          return of(addUsuarioErrorAction({ error: error.message }));
        })
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
