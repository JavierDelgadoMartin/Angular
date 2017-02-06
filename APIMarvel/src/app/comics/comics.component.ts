import { Component, OnInit } from '@angular/core';
import {ApiService} from "../api.service";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  listaComics;
  constructor(private api:ApiService) { }

  ngOnInit() {
    this.api.obtenerComics("/v1/public/comics").subscribe(
      data => {this.listaComics = data;console.log(this.listaComics)});
  }
  cambiarOffset(){
    this.api.cambiaOffset(20);
  }
}
