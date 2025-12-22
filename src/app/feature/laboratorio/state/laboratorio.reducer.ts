import {LaboratorioState} from './laboratorio.model';
import {createReducer, on} from '@ngrx/store';
import {laboratorioActions} from './laboratorio.actions';

const initialState: LaboratorioState  = {
  laboratorios: []
};

export const laboratorioReducer = createReducer(
  initialState,
  on(laboratorioActions.listarLaboratorios, (state) => ({
    ...state,
  })),
  on(laboratorioActions.listarLaboratoriosOk, (state, {laboratorios}) => ({...state, laboratorios}))
);
