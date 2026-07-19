import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Gasto } from '../../models/gasto.model';
import { GastosService } from '../../services/gastos.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.html',
  standalone: false,
  styleUrl: './reporte.css'
})
export class ReporteComponent implements OnInit {
  gastos: Gasto[] = [];
  cargando = true;
  error = '';

  get total(): number {
    return this.gastos.reduce((suma, gasto) => suma + Number(gasto.valor ?? 0), 0);
  }

  constructor(
    private gastosService: GastosService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.cargando = true;
    this.error = '';

    this.gastosService.obtenerDatos().subscribe({
      next: gastos => {
        this.gastos = gastos;
        this.cargando = false;
        this.changeDetectorRef.markForCheck();
      },
      error: () => {
        this.error = 'No fue posible leer el archivo datos.json.';
        this.cargando = false;
        this.changeDetectorRef.markForCheck();
      }
    });
  }
}
