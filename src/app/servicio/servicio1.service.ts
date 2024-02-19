import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Servicio1Service {

  constructor(private http:HttpClient) { }

  getGastos(){
    return this.http.get('http://127.0.0.1:8000/api/gasto/tipo');
  }

  mostrar(){
    return this.http.get('http://127.0.0.1:8000/api/mostrar');
  }


  saveTipo(tipo:any, name:any, apellido:any, cedula:any, email:any, telefono:any,especialidad:any){
    return this.http.post('http://localhost:3000/api/register',
      {
        name:name,
        apellido:apellido,
        cedula:cedula,
        email:email,
        telefono:telefono,
        especialidad:especialidad,
        tipo_id:tipo
      }
    );
  }
}
