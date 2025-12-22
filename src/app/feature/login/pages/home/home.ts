import {Component, effect, inject, signal} from '@angular/core';
import {MatFormField} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {Store} from '@ngrx/store';
import {globalActions} from '../../../../core/state/global.actions';
import {isLoged} from '../../../../core/state/global.selector';
import {Router, RouterLink} from '@angular/router';
import {toSignal} from '@angular/core/rxjs-interop';

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

  private _store = inject(Store)

  isLoged = toSignal(this._store.select(isLoged));

  form = this._formBuilder.group({
    userName: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(12)]]
  });

  constructor() {
    effect(() => {
      console.log(this.isLoged())
      if (this.isLoged()) {
        this.form.reset()
        this.router.navigate(['/']);
      }
    });
  }

  iniciarSesion(): void{
    const userName: string = this.form.value.userName || '';
    const password: string = this.form.value.password || '';

    this._store.dispatch(globalActions.loginUsuario({userName,password}));
  }

  formValid(): void {
    if (this.form.valid) this.disabledForm.set(false);
    else this.disabledForm.set(true);
  }
}
