import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleado';
import { Observable, Subject } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  empleados: Observable<Empleado[]>;
  empleado: Empleado = new Empleado();
  deleteMessage = false;
  empleadoSel: Observable<Empleado>;
  isUpdated = false;

  ngOnInit(): void {
    this.isUpdated = false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };   
    this.empleadoService.getListaEmpleado().subscribe(data =>{
      this.empleados = data;
      this.dtTrigger.next();
    })

  }

  deleteEmpleado(id: number){
    this.empleadoService.deleteEmpleado(id).
      subscribe(data => {console.log(data);
      this.deleteMessage = true;
      this.empleadoService.getListaEmpleado().subscribe(data => {
        this.empleados = data
      })},
      error => console.log(error));
  }

  updateListaEmpleado(id: number){
    this.empleadoService.getEmpleado(id).subscribe(
      data => {
        this.empleadoSel = data},
        error => console.log(error)
    );
  }

  updateEmpleado(){
    
    this.empleadoService.updateEmpleado(this.empleado.id, this.empleado).subscribe(
      response => {
        console.log(response);
        this.isUpdated = true;
      },
      error => {
        console.log(error);
      }
    );
    this.empleadoService.getListaEmpleado().subscribe(data =>{
      this.empleados = data
    });
  }



  /*empleadoUpdateForm = new FormGroup({
    
    empleado_nombre: new FormControl(),
    empleado_email: new FormControl(),
    empleado_sector: new FormControl()
  });

  updateEmpleado(){
    
    this.empleado.nombre = this.EmpleadoNombre.value;
    this.empleado.email = this.EmpleadoEmail.value;
    this.empleado.sector = this.EmpleadoSector.value;
    console.log(this.EmpleadoSector.value);

    this.empleadoService.updateEmpleado(this.empleado.id, this.empleado).subscribe
      (data =>{
        this.isUpdated = true;
        this.empleadoService.getListaEmpleado().subscribe(data =>{
          this.empleados = data
        });
      },
      error => console.log(error));

  }

  

  get EmpleadoNombre(){
    return this.empleadoUpdateForm.get('empleado_nombre');
  }

  get EmpleadoEmail(){
    return this.empleadoUpdateForm.get('empleado_email');
  }

  get EmpleadoSector(){
    return this.empleadoUpdateForm.get('empleado_sector');
  }*/

  changeIsUpdate(){
    this.isUpdated = false;
  }

}
