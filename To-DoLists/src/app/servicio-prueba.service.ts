import { Injectable } from '@angular/core';

@Injectable()
export class ServicioPruebaService {
private arrayDatos: Array<string>;

  constructor() {
    this.arrayDatos = ["d1","d2","d3","d4","d5","d6","d7","d8","d9","d10","d11","d12","d13","d14","d15","d16","d17","d18"];
  }

  get obtenerDatos(){
    return this.arrayDatos;
  }

  get obtenerDatosV2(){
    return Promise.resolve(this.arrayDatos);
  }
}
