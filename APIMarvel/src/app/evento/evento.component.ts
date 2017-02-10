import { Component, OnInit } from '@angular/core';
import {AjaxService} from "../ajax.service";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  private listaEventos;
  private link = "/v1/public/events";

  constructor(private servicio:AjaxService) { }

  ngOnInit() {
    this.servicio.obtenerListaDatos(this.link).subscribe(data => {this.listaEventos = data});
  }
}
