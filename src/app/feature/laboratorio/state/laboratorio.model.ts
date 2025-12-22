export interface LaboratorioState {
  laboratorios: Laboratorio[];
}


export interface Laboratorio {
  id:     number;
  codigo: string;
  nombre: string;
  tipo:   string;
}
