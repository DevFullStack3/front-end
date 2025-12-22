import {createActionGroup, emptyProps, props} from '@ngrx/store';
import {Laboratorio} from './laboratorio.model';


export const laboratorioActions = createActionGroup({
  source: 'laboratorio',
  events: {
    'listar laboratorios': emptyProps(),
    'listar laboratorios ok': props<{laboratorios: Laboratorio[]}>()
  }
})
