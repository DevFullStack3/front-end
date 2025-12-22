import {createActionGroup, props} from '@ngrx/store';

export const globalActions = createActionGroup({
  source: 'global',
  events: {
    'login usuario': props<{userName: string, password: string}>(),
    'login usuario ok': props<{userName: string, password: string}>()
  }
  }
)
