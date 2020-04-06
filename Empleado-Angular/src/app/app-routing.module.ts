import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddEmpleadoComponent} from './add-empleado/add-empleado.component';
import { ListaEmpleadoComponent } from './lista-empleado/lista-empleado.component';
import { BuscarEmpleadoComponent } from './buscar-empleado/buscar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';


const routes: Routes = [
  {path: '', redirectTo: 'view-empleado', pathMatch: 'full'},
  {path: 'view-empleado', component: ListaEmpleadoComponent},
  {path: 'add-empleado', component: AddEmpleadoComponent},
  {path: 'buscar-empleado', component: BuscarEmpleadoComponent},
  {path: 'actualizar-empleado', component: ActualizarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
