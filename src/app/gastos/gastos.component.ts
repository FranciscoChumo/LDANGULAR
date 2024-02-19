import { Component, OnInit } from '@angular/core';
import { Servicio1Service } from '../servicio/servicio1.service';

@Component({
  selector: 'app-gastos',
  standalone: true,
  imports: [],
  templateUrl: './gastos.component.html',
  styleUrl: './gastos.component.css'
})
export class GastosComponent {
  gasto:any;
  mostrar:any;
  oluser:any;
  constructor( private Service1:Servicio1Service){}
  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos(){
    this.Service1.mostrar().subscribe({
      next:(data:any)=>{
        this.mostrar=data.tipos
      },
      error:(e)=>{
        debugger
      }
    })
  }

  register(tipo:any, name:any, apellido:any, cedula:any, email:any, telefono:any, especialida:any){
    debugger
    this.Service1.saveTipo(tipo.value, name.value, apellido.value, cedula.value, email.value, telefono.value, especialida.value).subscribe({

      next:(data:any)=>{
        this.Service1=data.message
      },
      error:(e)=>{
        debugger
      }
    })
  }
}
