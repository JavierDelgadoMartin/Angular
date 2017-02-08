import { Component, OnInit } from '@angular/core';
import {ComicsService} from "../comics.service";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {
  private listaComics;
  constructor(private api:ComicsService) { }

  ngOnInit() {
    this.api.obtenerComics().subscribe(
      data => {this.listaComics = data;console.log(this.listaComics)});
  }
  sumarOffset(){
    this.api.cambiaOffset(100);
  }
}
