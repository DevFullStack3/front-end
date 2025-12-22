import {Component, inject, signal} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {Router, RouterLink} from '@angular/router';
import {UsuarioModel} from '../../../usuario/state/usuario.model';
import {addUsuarioAction} from '../../../usuario/state/usuario.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-home',
  imports: [
    MatFormField,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private _formBuilder: FormBuilder = inject(FormBuilder);
  router: Router = inject(Router);
  disabledForm = signal(true);
  store = inject(Store);

  form = this._formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    apellido: ['', [Validators.required, Validators.minLength(3)]],
    userName: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(12)]],
    email: ['', [Validators.required, Validators.email]],
  });

  formValid(): void {
    if (this.form.valid) this.disabledForm.set(false);
    else this.disabledForm.set(true);
  }

  registrarUsuario(): void{
    console.log('registrarme');
    if (!this.form.valid) return;

    console.log('registrarme')
    const usuarioNew: UsuarioModel = {
      nombre: this.form.value.nombre||'',
      apellido: this.form.value.apellido||'',
      email: this.form.value.email||'',
      password: this.form.value.password||'',
      userName: this.form.value.userName||'',
      activo: 'true'};
    this.store.dispatch(addUsuarioAction(usuarioNew));
  }
}
