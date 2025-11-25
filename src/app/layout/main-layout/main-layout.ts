import {Component, signal} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {RouterLink, RouterModule, RouterOutlet} from '@angular/router';

interface NavItem {
  ruta: string;
  titulo: string;
}

@Component({
  selector: 'app-main-layout',
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    RouterModule,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  list = signal<NavItem[]>(
    [
      {
        ruta: 'usuarios',
        titulo: 'Usuarios'
      },
      {
        ruta: 'laboratorios',
        titulo: 'Laboratorios'
      }
    ]
  )
}
