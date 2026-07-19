import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { CalculoImpuesto, Deducible, Gasto } from '../models/gasto.model';

@Injectable({
  providedIn: 'root'
})
export class GastosService {
  private readonly datosUrl = 'assets/datos.json';
  private readonly apiUrl = 'http://localhost:3000/api/gastos';
  private readonly gastosKey = 'facturas-gastos';
  private readonly impuestosKey = 'calculos-impuesto';

  constructor(private http: HttpClient) {}

  /** Obtiene el archivo JSON local solicitado en la practica de HttpClient. */
  obtenerDatos(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.datosUrl);
  }

  getDeducibles(): Deducible[] {
    return [
      {
        tipo: 'Salud',
        descripcion: 'Consultas, medicinas, seguros y servicios relacionados con el cuidado de la salud.',
        informacion: 'Guarda facturas autorizadas con RUC, fecha, proveedor y valor total.',
        imagen: '/assets/banner-gastos.png'
      },
      {
        tipo: 'Vivienda',
        descripcion: 'Arriendo, intereses de prestamos hipotecarios y gastos asociados a vivienda.',
        informacion: 'Registra solo comprobantes validos y vinculados al contribuyente.',
        imagen: '/assets/banner-gastos.png'
      },
      {
        tipo: 'Educacion',
        descripcion: 'Matriculas, pensiones, utiles, textos y servicios educativos permitidos.',
        informacion: 'Puedes clasificar cada factura para revisar el total por categoria.',
        imagen: '/assets/banner-gastos.png'
      },
      {
        tipo: 'Alimentacion',
        descripcion: 'Compras de alimentos y consumos sustentados con comprobantes validos.',
        informacion: 'El reporte ayuda a evitar que las deducciones excedan el maximo permitido.',
        imagen: '/assets/banner-gastos.png'
      },
      {
        tipo: 'Vestimenta',
        descripcion: 'Prendas de vestir adquiridas para uso personal o familiar.',
        informacion: 'Conserva las facturas originales para respaldar la deduccion.',
        imagen: '/assets/banner-gastos.png'
      }
    ];
  }

  obtenerGastosApi(): Observable<Gasto[]> {
    return this.http.get<Gasto[]>(this.apiUrl).pipe(catchError(() => of([])));
  }

  guardarGastoApi(gasto: Gasto): Observable<unknown> {
    return this.http.post(this.apiUrl, gasto).pipe(catchError(() => of(null)));
  }

  eliminarGastoApi(id: string): Observable<unknown> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(catchError(() => of(null)));
  }

  obtenerGastosLocales(): Gasto[] {
    return this.readJson<Gasto[]>(this.gastosKey, []);
  }

  guardarGastoLocal(gasto: Gasto): Gasto[] {
    const gastos = this.obtenerGastosLocales();
    gastos.push({
      ...gasto,
      _id: gasto._id || crypto.randomUUID(),
      createdAt: gasto.createdAt || new Date().toISOString()
    });
    localStorage.setItem(this.gastosKey, JSON.stringify(gastos));
    return gastos;
  }

  eliminarGastoLocal(id: string): Gasto[] {
    const gastos = this.obtenerGastosLocales().filter(gasto => gasto._id !== id);
    localStorage.setItem(this.gastosKey, JSON.stringify(gastos));
    return gastos;
  }

  guardarCalculo(calculo: CalculoImpuesto): CalculoImpuesto[] {
    const calculos = this.readJson<CalculoImpuesto[]>(this.impuestosKey, []);
    calculos.unshift(calculo);
    localStorage.setItem(this.impuestosKey, JSON.stringify(calculos.slice(0, 10)));
    return calculos;
  }

  obtenerCalculos(): CalculoImpuesto[] {
    return this.readJson<CalculoImpuesto[]>(this.impuestosKey, []);
  }

  private readJson<T>(key: string, fallback: T): T {
    const raw = localStorage.getItem(key);
    if (!raw) {
      return fallback;
    }

    try {
      return JSON.parse(raw) as T;
    } catch {
      return fallback;
    }
  }
}
