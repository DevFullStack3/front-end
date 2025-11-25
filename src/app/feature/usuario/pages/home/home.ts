import {Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {UsuarioModel} from '../../state/usuario.model';
import {getUsuario} from '../../state/usuario.selector';
import {toSignal} from '@angular/core/rxjs-interop';
import {addUsuarioAction, listUsuarioAction} from '../../state/usuario.actions';
import {MatTableModule} from '@angular/material/table';
import {RouterModule} from '@angular/router';

@Component({
  imports: [
    MatTableModule,
    RouterModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit {
  store = inject(Store<UsuarioModel>);

  usuarios = toSignal(this.store.select(getUsuario), {
    initialValue: [] as UsuarioModel[],
  });
  displayedColumns: string[] = ['nombre', 'apellido', 'email'];

  ngOnInit() {
    this.store.dispatch(listUsuarioAction());
    console.log(this.usuarios());
  }

  addUsuario(){
    const usuarioNew: UsuarioModel = {nombre: 'Kevin', apellido: 'Perez', email: 'prueba@correo.cl', password: '<PASSWORD>', userName: 'kevin', activo: 'true'};
    this.store.dispatch(addUsuarioAction(usuarioNew));
  }
}
