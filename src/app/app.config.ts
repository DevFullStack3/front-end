import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideEffects } from '@ngrx/effects';
import {usuarioReducer} from './feature/usuario/state/usuario.reducer';
import UsuarioEffects from './feature/usuario/state/usuario.effects';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideStore({usuarioReducer}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects([UsuarioEffects]),
    provideHttpClient()
]
};
