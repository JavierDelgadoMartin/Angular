import { Component, OnInit } from '@angular/core';
import {AjaxService} from "../ajax.service";
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-detalle-evento',
  templateUrl: './detalle-evento.component.html',
  styleUrls: ['./detalle-evento.component.css']
})
export class DetalleEventoComponent implements OnInit {
  private evento;
  private id;

  constructor(private servicio:AjaxService,private route:ActivatedRoute) { }

  ngOnInit() {
     this.route.params.subscribe(params => {this.id = params['id'];
     this.evento = this.servicio.obtenerDato(this.id);});
     console.log(this.evento);
  }

}
