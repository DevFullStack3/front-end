import {GlobalState} from './global.model';
import {createReducer, on} from '@ngrx/store';
import {globalActions} from './global.actions';

const initialState: GlobalState = {
  loading: false,
  error: null,
  loged: false,
  usuarioLogeado: ''
};

export const globalReducer = createReducer(
  initialState,
  on(globalActions.loginUsuario, (state) => ({
    ...state,
    loading: true,
    loged: false,
    error: null
  })),
  on(globalActions.loginUsuarioOk, (state) => ({
    ...state,
    loading: false,
    loged: true,
    error: null
  }))

);
