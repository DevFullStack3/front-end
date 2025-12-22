import {globalReducer} from './global.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';
import {GlobalState} from './global.model';

export const selectGlobalState = createFeatureSelector<GlobalState>('global');


export const isLoged = createSelector(
  selectGlobalState,
  (state: GlobalState) => state.loged
);
