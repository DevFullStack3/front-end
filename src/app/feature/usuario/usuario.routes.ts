import { Routes } from '@angular/router';
import {Home} from './pages/home/home';
import {Ingresar} from './pages/ingresar/ingresar';

export const UsuarioRoutes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'ingresar',
    component: Ingresar
  }
];
