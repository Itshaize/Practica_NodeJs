import { Component } from '@angular/core';
import { Gasto } from '../../models/gasto.model';
import { GastosService } from '../../services/gastos.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.html',
  standalone: false,
  styleUrl: './factura.css'
})
export class FacturaComponent {
  ruc = '99999999001';
  empresa = '';
  valor = 0;
  gasto = 'Ninguno';
  descripcion = '';
  mensaje = '';

  tiposGasto = ['Salud', 'Vivienda', 'Educacion', 'Alimentacion', 'Vestimenta', 'Ninguno'];

  constructor(private gastosService: GastosService) {}

  agregar(): void {
    const factura: Gasto = {
      ruc: this.ruc.trim(),
      empresa: this.empresa.trim() || 'Consumidor final',
      monto: Number(this.valor),
      tipo: this.gasto,
      descripcion: this.descripcion.trim()
    };

    if (!factura.ruc || Number(factura.monto) <= 0 || factura.tipo === 'Ninguno') {
      this.mensaje = 'Ingrese RUC, valor mayor a cero y tipo de gasto.';
      return;
    }

    this.gastosService.guardarGastoLocal(factura);
    this.gastosService.guardarGastoApi(factura).subscribe();
    this.mensaje = 'Factura guardada en JSON local y enviada al backend si esta activo.';
    this.valor = 0;
    this.descripcion = '';
  }
}
