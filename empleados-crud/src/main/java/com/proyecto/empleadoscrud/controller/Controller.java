package com.proyecto.empleadoscrud.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.web.bind.annotation.CrossOrigin;  
import org.springframework.web.bind.annotation.DeleteMapping;  
import org.springframework.web.bind.annotation.GetMapping;  
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;  
import org.springframework.web.bind.annotation.PostMapping;  
import org.springframework.web.bind.annotation.RequestBody;  
import org.springframework.web.bind.annotation.RequestMapping;  
import org.springframework.web.bind.annotation.RestController; 

import com.proyecto.empleadoscrud.modelo.Empleado;
import com.proyecto.empleadoscrud.service.EmpleadoService;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(value = "/api")
public class Controller{

    @Autowired 
    private EmpleadoService empleadoService;

    @PostMapping("/save-empleado")
    public Empleado saveEmpleado(@RequestBody Empleado empleado){
        return empleadoService.saveEmpleado(empleado);
    }

    @GetMapping("/lista-empleados")
    public List<Empleado> getEmpleados(){
        return empleadoService.getEmpleados();
    }

    @DeleteMapping("/delete-empleado/{id}")
    public void deleteEmpleado(@PathVariable("id") Long id){
        empleadoService.deleteEmpleado(id);
    }

    @GetMapping("/empleado/{id}")
    public Empleado getEmpleadoById(@PathVariable("id") Long id){
        return empleadoService.getEmpleadoById(id);
    }

    @PutMapping("/update-empleado/{id}")
    public Empleado updateEmpleado(@PathVariable("id") Long id, @RequestBody Empleado empleadoDetails){
        return empleadoService.updateEmpleado(id, empleadoDetails);
    }

}