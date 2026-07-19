import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformacionComponent } from './components/informacion/informacion';
import { FacturaComponent } from './components/factura/factura';
import { ReporteComponent } from './components/reporte/reporte';
import { UsuariosComponent } from './components/usuarios/usuarios';

const routes: Routes = [
  { path: '', component: InformacionComponent },
  { path: 'informacion', component: InformacionComponent },
  { path: 'factura', component: FacturaComponent },
  { path: 'reporte', component: ReporteComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
