import {createAction, props} from '@ngrx/store';
import {UsuarioModel} from './usuario.model';

export const addUsuarioAction = createAction('[Usuario] Add Usuario', props<UsuarioModel>());
export const addUsuarioOkAction = createAction('[Usuario] Add Ok Usuario', props<UsuarioModel>());

export const listUsuarioAction = createAction('[Usuario] List Usuario');
export const listUsuarioOkAction = createAction('[Usuario] List Ok Usuario', props<{usuarios:UsuarioModel[]}>());

export const deleteUsuarioAction = createAction(
  '[Usuario] Delete Usuario',
  props<{id:number}>()
);
export const deleteUsuarioOkAction = createAction(
  '[Usuario] Delete Usuario OK',
  props<{id:number}>()
);


export const updateUsuarioAction = createAction('[Usuario] Update Usuario');
