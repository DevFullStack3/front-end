import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UsuarioModel} from './usuario.model';

export const selectUsuarioState = createFeatureSelector<UsuarioModel[]>('usuario');


export const getUsuario = createSelector(
  selectUsuarioState,
  (state: UsuarioModel[]) => state
);
