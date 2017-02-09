import { Component, OnInit } from '@angular/core';
import {PersonajesService} from "../personajes.service";

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})

export class DetallePersonajeComponent implements OnInit {
  private personaje;
  constructor(private servicio:PersonajesService) { }

  ngOnInit() {
    this.personaje = this.servicio.obtenerPersonaje;
  }
}