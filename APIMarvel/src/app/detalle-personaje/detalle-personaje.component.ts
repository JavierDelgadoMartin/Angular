import { Component, OnInit } from '@angular/core';
import {AjaxService} from "../ajax.service";
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})

export class DetallePersonajeComponent implements OnInit {
  private personaje;
  private id;

  constructor(private servicio:AjaxService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = params['id']});
    this.personaje = this.servicio.obtenerDato(this.id);
  }
}