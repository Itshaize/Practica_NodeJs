import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MenuComponent } from './components/menu/menu';
import { InformacionComponent } from './components/informacion/informacion';
import { FacturaComponent } from './components/factura/factura';
import { ReporteComponent } from './components/reporte/reporte';
import { UsuariosComponent } from './components/usuarios/usuarios';

@NgModule({
  declarations: [
    App,
    MenuComponent,
    InformacionComponent,
    FacturaComponent,
    ReporteComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
