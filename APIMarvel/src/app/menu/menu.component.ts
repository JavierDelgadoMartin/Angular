import { Component, OnInit } from '@angular/core';
import {AjaxService} from "../ajax.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private clave;
  constructor(private servicio:AjaxService) { }

  ngOnInit() {
  }
  buscar(){
    this.servicio.buscarDatos(this.clave);
  }
}
