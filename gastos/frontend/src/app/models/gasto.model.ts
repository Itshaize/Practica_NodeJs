export interface Deducible {
  tipo: string;
  descripcion: string;
  informacion: string;
  imagen: string;
}

export interface Gasto {
  _id?: string;
  id?: number;
  tipo: string;
  ruc: string;
  valor?: number;
  empresa?: string;
  monto?: number;
  descripcion?: string;
  createdAt?: string;
}

export interface CalculoImpuesto {
  cedula: string;
  ingresos: number;
  deducciones: number;
  baseImponible: number;
  fraccionBasica: number;
  excedente: number;
  porcentaje: number;
  impuestoFraccionBasica: number;
  impuestoRenta: number;
  fecha: string;
}
