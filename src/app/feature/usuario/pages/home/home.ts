import {Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UsuarioModel} from '../../state/usuario.model';
import {getUsuario} from '../../state/usuario.selector';
import {toSignal} from '@angular/core/rxjs-interop';
import {deleteUsuarioAction, deleteUsuarioOkAction, listUsuarioAction} from '../../state/usuario.actions';
import {MatTableModule} from '@angular/material/table';
import {RouterModule} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatIconButton} from '@angular/material/button';

@Component({
  imports: [
    MatTableModule,
    RouterModule,
    MatIconModule,
    MatIconButton
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  store = inject(Store<UsuarioModel>);

  usuarios = toSignal(this.store.select(getUsuario), {
    initialValue: [] as UsuarioModel[],
  });
  displayedColumns: string[] = ['nombre', 'apellido', 'username', 'email', 'acciones'];

  ngOnInit() {
    this.store.dispatch(listUsuarioAction());
  }

  eliminar(element: UsuarioModel): void {
    if (element.id === undefined) return;
    this.store.dispatch(deleteUsuarioAction({id:element.id}));
  }
}
