import { Component, OnInit } from '@angular/core';
import {ComicsService} from "../comics.service";
@Component({
  selector: 'app-detalle-comic',
  templateUrl: './detalle-comic.component.html',
  styleUrls: ['./detalle-comic.component.css']
})
export class DetalleComicComponent implements OnInit {
  private comic;

  constructor(private servicio:ComicsService) { }

  ngOnInit() {
    this.comic = this.servicio.obtenercomic;
  }

}
