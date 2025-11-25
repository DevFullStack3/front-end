import {createReducer, on, props} from '@ngrx/store';
import { UsuarioModel } from './usuario.model';
import { addUsuarioOkAction, listUsuarioOkAction} from './usuario.actions';

const initialState: UsuarioModel[] = [];

export const usuarioReducer = createReducer(initialState,
  on(addUsuarioOkAction, (state, props) => [...state, props]),


  on(listUsuarioOkAction, ((state, {usuarios}) => usuarios))
);
