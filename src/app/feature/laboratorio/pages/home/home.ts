import {Component, inject, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {laboratorioActions} from '../../state/laboratorio.actions';
import {toSignal} from '@angular/core/rxjs-interop';
import {selectLaboratorios} from '../../state/laboratorio.selector';
import {Laboratorio} from '../../state/laboratorio.model';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIconModule,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements OnInit{
  store = inject(Store);

  laboratorios = toSignal(this.store.select(selectLaboratorios), {
    initialValue: [] as Laboratorio[],
  });

  displayedColumns: string[] = ['codigo', 'nombre', 'tipo'];

  ngOnInit(): void {
    this.store.dispatch(laboratorioActions.listarLaboratorios());
  }
}
