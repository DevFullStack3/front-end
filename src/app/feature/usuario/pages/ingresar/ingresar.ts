import {Component, inject, signal} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {UsuarioModel} from '../../state/usuario.model';
import {addUsuarioAction} from '../../state/usuario.actions';
import {Router} from '@angular/router';

@Component({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './ingresar.html',
  styleUrl: './ingresar.css',
})
export class Ingresar {
  builder = inject(FormBuilder);
  store = inject(Store<UsuarioModel>);
  router = inject(Router);


  form = signal(this.builder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    userName: ['', [Validators.required, Validators.minLength(3)]],
    pass: ['', [Validators.required, Validators.minLength(12)]],
    email: ['', [Validators.required, Validators.email]],
  }));



  addUser(){
    if (!this.form().valid) return;
    const usuarioNew: UsuarioModel = {
      nombre: this.form().value.nombre||'',
      apellido: this.form().value.apellido||'',
      email: this.form().value.email||'',
      password: this.form().value.pass||'',
      userName: this.form().value.userName||'',
      activo: 'true'};
    this.store.dispatch(addUsuarioAction(usuarioNew));
    // this.router.navigate(['/usuarios']);
  }
}
