import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import {usuarioReducer} from './feature/usuario/state/usuario.reducer';
import UsuarioEffects from './feature/usuario/state/usuario.effects';
import {provideHttpClient} from '@angular/common/http';
import {globalReducer} from './core/state/global.reducer';
import GlobalEffects from './core/state/global.effects';
import {laboratorioReducer} from './feature/laboratorio/state/laboratorio.reducer';
import LaboratorioEffects from './feature/laboratorio/state/laboratorio.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideStore({
      usuario: usuarioReducer,
      global: globalReducer,
      laboratorio: laboratorioReducer
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects([UsuarioEffects, GlobalEffects, LaboratorioEffects]),
    provideHttpClient()
]
};
