import { Routes } from '@angular/router';
import {Home} from './feature/registro/pages/home/home';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./feature/login/login.routes').then(value => value.LoginRoutes)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./feature/usuario/usuario.routes').then(value => value.UsuarioRoutes)
  },
  {
    path: 'laboratorios',
    loadChildren: () => import('./feature/laboratorio/laboratorio.routes').then(value => value.LABORATORIO_ROUTES)
  },
  {
    path: 'registro',
    component: Home,
  }
];
