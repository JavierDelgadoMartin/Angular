import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PersonajesService} from "../personajes.service";

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})

export class DetallePersonajeComponent implements OnInit {
  private personaje;
  constructor(private route: ActivatedRoute,private servicio:PersonajesService) { }

  ngOnInit() {
    //this.route.params.subscribe(params => {this.personaje = params['personaje']});  
    this.personaje = this.servicio.obtenerPersonaje;
    console.log(this.personaje);
  }
}