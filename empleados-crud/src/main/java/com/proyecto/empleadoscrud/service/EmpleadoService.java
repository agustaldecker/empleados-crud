package com.proyecto.empleadoscrud.service;

import com.proyecto.empleadoscrud.modelo.Empleado;
import com.proyecto.empleadoscrud.repository.EmpleadoRepository;
import com.proyecto.empleadoscrud.exception.ResourceNotFoundException;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;  
import org.springframework.stereotype.Service;  

@Service
public class EmpleadoService{

    @Autowired
    private EmpleadoRepository empleadoRepository;

    public Empleado saveEmpleado(Empleado empleado){
        return empleadoRepository.save(empleado);
    }

    public List<Empleado> getEmpleados(){
        return empleadoRepository.findAll();
    }

    public void deleteEmpleado(Long id){
        Empleado empleado = empleadoRepository.findById(id).
            orElseThrow(() -> new ResourceNotFoundException("Empleado", "Id", id));
        empleadoRepository.delete(empleado);
    }

    public Empleado getEmpleadoById(Long id){
        return empleadoRepository.findById(id).
            orElseThrow(() -> new ResourceNotFoundException("Empleado", "Id", id));
    }

    public Empleado updateEmpleado(Long id, Empleado empleadoDetails){
        Empleado empleado = empleadoRepository.findById(id).
            orElseThrow(() -> new ResourceNotFoundException("Empleado", "Id", id));
        empleado.setNombre(empleadoDetails.getNombre());
        empleado.setEmail(empleadoDetails.getEmail());
        empleado.setSector(empleadoDetails.getSector());
        empleadoRepository.save(empleado);
        return empleado;
    }

}