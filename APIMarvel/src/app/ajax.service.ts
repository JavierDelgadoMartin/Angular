import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class AjaxService {
  private hash = Md5.hashStr(1+"ff05df04fcf7d322f4963c15c1fbc0925f47a091"+"97ffe99b1a6b0a681c66bddff8048f1e");
  private publick = "97ffe99b1a6b0a681c66bddff8048f1e";
  private comics = [];
  private listaComics = [];
  private datos: Subject<any> = new Subject<any>();

  constructor(private ajax:Http) {

  }

  llamadaApi(link){
    let offset = 0;
    let count;
    let enlace = "https://gateway.marvel.com"+link+"?ts=1&apikey="+this.publick+"&hash="+this.hash+"&offset=0"+"&limit=100";
    this.ajax.get(enlace)
      .map(response => response.json())
      .subscribe(data => {this.cargarDatos(link,data.data.total/2)},
                  error=> console.log(error));
  }

  cargarDatos(link,count){
    let offset = 0;
    for(offset=0;offset<count;offset = offset + 100){
      let enlace = "https://gateway.marvel.com"+link+"?ts=1&apikey="+this.publick+"&hash="+this.hash+"&offset="+offset+"&limit=100";
      this.ajax.get(enlace)
      .map(response => response.json())
      .subscribe( data => {this.comics.push(data.data.results);this.datos.next(this.comics);},error=> console.log(error));
    }
  }

  obtenerDatos(link){
    this.llamadaApi(link);
    return this.datos.asObservable();
  }

  obtenerDato(id){
    for(let i of this.comics){
      for(let j of i){
        if(j.id == id){
          return j;
        }
      }
    }
  }

  buscarDatos(clave){
    for(let i of this.comics){
      for(let j of i){
        
      }
    }
  }

}