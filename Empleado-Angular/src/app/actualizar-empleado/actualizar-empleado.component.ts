import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();
  id: number;
  nombre: String;
  email: String;
  sector: String;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
  }

  actualizarEmpleado(){
    this.empleado.id = this.id;
    this.empleado.nombre = this.nombre;
    this.empleado.email = this.email;
    this.empleado.sector = this.sector;
    this.empleadoService.updateEmpleado(this.empleado.id, this.empleado).subscribe(
      response => {
        console.log(response);
        
      },
      error => {
        console.log(error);
      }
    );
  }

}
