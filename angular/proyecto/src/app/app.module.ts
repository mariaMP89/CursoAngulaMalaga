import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CmpDatabindingComponent } from './cmp-databinding/cmp-databinding.component';
import { CmpPipesComponent } from './cmp-pipes/cmp-pipes.component';
import {CmpDirectivesComponent } from './cmp-directives/cmp-directives.component';

import { DoblePipe } from './cmp-pipes/doble.pipe';
import { ImpuroPipe } from './cmp-pipes/impuro.pipe';
import { OcultoPipe } from './cmp-pipes/oculto.pipe';
import { ReversePipe } from './cmp-pipes/reverse.pipe';
import { MarcadoDirective } from './cmp-directives/marcado.directive';
import { CmpServiciosComponent } from './cmp-servicios/cmp-servicios.component';
import { LogService } from './cmp-servicios/log.service';
import { CmpAComponent } from './cmp-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp-servicios/cmp-b/cmp-b.component';
import {DatosService} from './cmp-servicios/datos.service';
import { CmpFormularioComponent } from './cmp-formulario/cmp-formulario.component';
import { CmpObservablesComponent } from './cmp-observables/cmp-observables.component';
import { HomeComponent } from './cmp-observables/home/home.component';
import { UsuarioComponent } from './cmp-observables/usuario/usuario.component';
import { Routing } from './cmp-observables/app.routing';
import { UsuarioService } from './cmp-observables/usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    CmpDatabindingComponent,
    CmpPipesComponent,
    CmpDirectivesComponent,
    DoblePipe,
    ImpuroPipe,
    OcultoPipe,
    ReversePipe,
    MarcadoDirective,
    CmpServiciosComponent,
    CmpAComponent,
    CmpBComponent,
    CmpFormularioComponent,
    CmpObservablesComponent,
    HomeComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [LogService,
             DatosService,
            UsuarioService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
