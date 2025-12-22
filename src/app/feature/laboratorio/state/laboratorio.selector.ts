import {createFeatureSelector, createSelector} from '@ngrx/store';
import {LaboratorioState} from './laboratorio.model';

export const selectLaboratorio = createFeatureSelector<LaboratorioState>('laboratorio');

export const selectLaboratorios = createSelector(
  selectLaboratorio,
  (state: LaboratorioState) => state.laboratorios
)
