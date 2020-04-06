package com.proyecto.empleadoscrud.repository;

import com.proyecto.empleadoscrud.modelo.Empleado;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmpleadoRepository extends JpaRepository<Empleado, Long>{
    
}