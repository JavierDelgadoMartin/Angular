import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  listaPersonajes;

  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.obtenerComics("/v1/public/comics").subscribe(
      data => {this.listaPersonajes = data;console.log(this.listaPersonajes)});
  }

}
