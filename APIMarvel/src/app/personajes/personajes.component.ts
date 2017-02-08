import { Component, OnInit } from '@angular/core';
import {PersonajesService} from "../personajes.service";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  private listaPersonajes = [];

  constructor(private api:PersonajesService) { }

  ngOnInit() {
      this.api.obtenerPersonajes().subscribe(data => {this.listaPersonajes = data;});
  }
}
