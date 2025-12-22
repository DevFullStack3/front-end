import {Component, effect, inject, OnDestroy, OnInit, signal, ViewChild} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {NavigationEnd, Router, RouterLink, RouterModule, RouterOutlet} from '@angular/router';
import {filter, Subject, takeUntil} from 'rxjs';

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
export class MainLayout implements OnInit, OnDestroy{
  router: Router = inject(Router);
  private destroy$ = new Subject<void>();
  @ViewChild('drawer') drawer!: MatSidenav;


  isLogin = signal(false);


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
  );

  ngOnInit() {
    const hayToken: string | null = sessionStorage.getItem('token');
    console.log(this.router.currentNavigation)
    // if (!hayToken || !this.router.url.toLowerCase().includes('registro')) this.router.navigate(['/login']);

    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this.destroy$)
      )
      .subscribe((event: NavigationEnd) => {
        const url = event.url;
        if (url.toLowerCase().includes('login') || url.toLowerCase().includes('registro')) this.isLogin.set(true);
        else this.isLogin.set(false);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
