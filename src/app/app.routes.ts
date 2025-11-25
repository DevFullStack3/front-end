import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'usuarios',
    loadChildren: () => import('./feature/usuario/usuario.routes').then(value => value.UsuarioRoutes)
  },
  {
    path: 'laboratorios',
    loadChildren: () => import('./feature/laboratorio/laboratorio.routes').then(value => value.LABORATORIO_ROUTES)
  }
];
