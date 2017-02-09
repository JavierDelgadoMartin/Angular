import { Component, OnInit } from '@angular/core';
import {ComicsService} from "../comics.service";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})

export class ComicsComponent implements OnInit {
  private listaComics;
  constructor(private servicio:ComicsService) { }

  ngOnInit() {
    this.servicio.obtenerComics().subscribe(
      data => {this.listaComics = data;});
  }
  cargarDetalle(id){
    for(let i of this.listaComics){
        if(i.id == id){
          this.servicio.cargarDetalle(i);
        }
    }
  }
}