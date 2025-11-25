import {Component, inject} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormBuilder} from '@angular/forms';

@Component({
  imports: [
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './ingresar.html',
  styleUrl: './ingresar.css',
})
export class Ingresar {
  _builder = inject(FormBuilder)



  addUser(){

  }
}
