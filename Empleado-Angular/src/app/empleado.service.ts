import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http: HttpClient) { }

  getListaEmpleado(): Observable<any>{
    return this.http.get(`${this.baseUrl}` + 'lista-empleados');
  }

  createEmpleado(empleado: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}` + 'save-empleado', empleado);
  } 

  deleteEmpleado(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/delete-empleado/${id}`, {responseType: 'text'});
  }

  getEmpleado(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/empleado/${id}`);
  }

  updateEmpleado(id: number, value: any): Observable<Object>{
    return this.http.put(`${this.baseUrl}/update-empleado/${id}`, value);
  }


}
