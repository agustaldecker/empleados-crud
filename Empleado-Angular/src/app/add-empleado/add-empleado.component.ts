import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Empleado } from '../empleado';

@Component({
  selector: 'app-add-empleado',
  templateUrl: './add-empleado.component.html',
  styleUrls: ['./add-empleado.component.css']
})
export class AddEmpleadoComponent implements OnInit {

  constructor(private empleadoService: EmpleadoService) { }

  empleado: Empleado = new Empleado();
  submitted = false;

  ngOnInit(): void {
    this.submitted = false;
  }

  empleadoSaveForm=new FormGroup({
    empleado_nombre:new FormControl('' , [Validators.required , Validators.minLength(3) ] ),
    empleado_email:new FormControl('',[Validators.required,Validators.email]),
    empleado_sector:new FormControl()
  });

  get EmpleadoNombre(){
    return this.empleadoSaveForm.get('empleado_nombre');
  }

  get EmpleadoEmail(){
    return this.empleadoSaveForm.get('empleado_email');
  }

  get EmpleadoSector(){
    return this.empleadoSaveForm.get('empleado_sector');
  }

  saveEmpleado(){
    this.empleado = new Empleado();
    this.empleado.nombre = this.EmpleadoNombre.value;
    this.empleado.email = this.EmpleadoEmail.value;
    this.empleado.sector = this.EmpleadoSector.value;
    this.submitted = true;

    this.empleadoService.createEmpleado(this.empleado).
      subscribe(data => console.log(data), error => console.log(error));
    this.empleado = new Empleado();
  }

  addEmpleadoForm(){
    this.submitted = false;
    this.empleadoSaveForm.reset();
  }


}
