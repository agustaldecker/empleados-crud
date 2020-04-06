import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buscar-empleado',
  templateUrl: './buscar-empleado.component.html',
  styleUrls: ['./buscar-empleado.component.css']
})
export class BuscarEmpleadoComponent implements OnInit {

  empleado: Empleado = new Empleado();
  id: number;

  constructor(private empleadoService: EmpleadoService) { }

  ngOnInit(): void {
  }

  buscarEmpleado(id: number){
    this.empleadoService.getEmpleado(id).subscribe(
      data => this.empleado = data, error => console.log(error)
    );
    
  }

  actualizarEmpleado(){
    this.empleado.id = this.id;
    this.empleado.nombre = "jeropa";
    this.empleado.email = "jeropa@gmail.com";
    this.empleado.sector = "Calidad";
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
