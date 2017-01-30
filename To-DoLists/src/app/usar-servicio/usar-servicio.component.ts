import { Component, OnInit } from '@angular/core';
import { ServicioPruebaService } from '../servicio-prueba.service';

@Component({
  selector: 'app-usar-servicio',
  templateUrl: './usar-servicio.component.html',
  styleUrls: ['./usar-servicio.component.css']
})
export class UsarServicioComponent implements OnInit {
private arrayDatos: any;

  constructor(private servicioDePrueba:ServicioPruebaService) {
    //this.arrayDatos = servicioDePrueba.obtenerDatos;

    this.servicioDePrueba.obtenerDatosV2.then(datos=> this.arrayDatos = datos);
  }

  ngOnInit() {
  }

}
