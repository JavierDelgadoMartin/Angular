import { Component, OnInit } from '@angular/core';
import {AjaxService} from "../ajax.service";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  private listaPersonajes;
  private link = "/v1/public/characters";

  constructor(private servicio:AjaxService) { }

  ngOnInit() {
      this.servicio.obtenerDatos(this.link).subscribe(data => {this.listaPersonajes = data;});
  }
}

