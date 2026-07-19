import { Component } from '@angular/core';
import { Deducible } from '../../models/gasto.model';
import { GastosService } from '../../services/gastos.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.html',
  standalone: false,
  styleUrl: './informacion.css'
})
export class InformacionComponent {
  deducibles: Deducible[] = [];
  mensaje = 'Seleccione Informacion en una tarjeta para ver mas detalles.';

  constructor(private gastosService: GastosService) {
    this.deducibles = this.gastosService.getDeducibles();
  }

  informacion(deducible: Deducible): void {
    this.mensaje = `${deducible.tipo}: ${deducible.informacion}`;
  }

  borrarDeducible(deducible: Deducible): void {
    this.deducibles = this.deducibles.filter(item => item.tipo !== deducible.tipo);
    this.mensaje = `${deducible.tipo} fue retirado de la interfaz.`;
  }
}
