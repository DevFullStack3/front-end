import { Component } from '@angular/core';
import {MainLayout} from './layout/main-layout/main-layout';

@Component({
  selector: 'app-root',
  template: `<app-main-layout/>`,
  styleUrl: './app.css',
  imports: [
    MainLayout
  ]
})
export class App {}
