import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';  
import { AddEmpleadoComponent} from './add-empleado/add-empleado.component';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuscarEmpleadoComponent } from './buscar-empleado/buscar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmpleadoComponent,
    ListaEmpleadoComponent,
    BuscarEmpleadoComponent,
    ActualizarEmpleadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
    FormsModule,  
    ReactiveFormsModule,  
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
