import { Component, OnInit } from '@angular/core';
import {AjaxService} from "../ajax.service";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})

export class ComicsComponent implements OnInit {
  private listaComics;
  private link = "/v1/public/comics";

  constructor(private servicio:AjaxService) { }

  ngOnInit() {
    this.servicio.obtenerListaDatos(this.link).subscribe(data => {this.listaComics = data});
  }
}