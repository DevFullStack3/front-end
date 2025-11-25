import {createSelector} from '@ngrx/store';
import {UsuarioModel} from './usuario.model';

const state = (state:any) => state.usuarioReducer;

export const getUsuario = createSelector(state, (state: UsuarioModel[]) => state);
