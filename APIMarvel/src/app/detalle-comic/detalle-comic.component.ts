import { Component, OnInit } from '@angular/core';
import {AjaxService} from "../ajax.service";
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-detalle-comic',
  templateUrl: './detalle-comic.component.html',
  styleUrls: ['./detalle-comic.component.css']
})
export class DetalleComicComponent implements OnInit {
  private comic;
  private id;
  constructor(private servicio:AjaxService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {this.id = params['id']});
    this.comic = this.servicio.obtenerDato(this.id);
  }
}
