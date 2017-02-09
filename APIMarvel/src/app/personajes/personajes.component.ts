import { Component, OnInit } from '@angular/core';
import {PersonajesService} from "../personajes.service";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  private listaPersonajes;

  constructor(private servicio:PersonajesService) { }

  ngOnInit() {
      this.servicio.obtenerPersonajes().subscribe(data => {this.listaPersonajes = data;});
  }

  cargarDetalle(id){
    for(let i of this.listaPersonajes){
        if(i.id == id){
          this.servicio.cargarDetalle(i);
        }
    }
  }

  onScroll(event){
    console.log(event);
  }
}
