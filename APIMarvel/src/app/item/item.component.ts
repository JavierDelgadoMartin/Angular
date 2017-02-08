import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PersonajesService} from "../personajes.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})

export class ItemComponent implements OnInit {
  private id;
  private listaP;
  private personaje:any;
  private zurullo;

  constructor(private route: ActivatedRoute,private servicio:PersonajesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = params['id']});
    this.cargarLista();
  }

  cargarLista(): void{
    this.servicio.obtenerPersonajes().subscribe(
      data => {
        this.listaP = data;this.zurullo = "mojon";
        this.buscarPersonaje();
      });
  }

  buscarPersonaje(){
    for(let i of this.listaP){
      if(i.id == this.id){
        console.log(i);
        this.personaje = i;
        console.log(this.personaje);
      }
    }
  }
}