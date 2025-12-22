import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {globalActions} from './global.actions';
import {map, switchMap} from 'rxjs';

export default class GlobalEffects {
  actions$: Actions<Action<string>> = inject(Actions);

  private _http = inject(HttpClient);

  readonly login$ = createEffect(() => this.actions$.pipe(
    ofType(globalActions.loginUsuario),
    switchMap(({userName, password}) => this._http.post('/auth/login', {userName, password}).pipe(
      map((res: any) => {
        const token = res.token;
        sessionStorage.setItem('token', token);
        return globalActions.loginUsuarioOk({userName, password})
      }))
    )
  ));
}
