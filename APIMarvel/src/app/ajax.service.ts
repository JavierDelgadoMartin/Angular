import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class AjaxService {
  private hash = Md5.hashStr(1+"ff05df04fcf7d322f4963c15c1fbc0925f47a091"+"97ffe99b1a6b0a681c66bddff8048f1e");
  private publick = "97ffe99b1a6b0a681c66bddff8048f1e";
  private listaDatos: Subject<any> = new Subject<any>();
  private comic;
  private arrayDatos;
  private offset = 0;  

  constructor(private ajax:Http) {

  }

  llamadaApi(link){
    let enlace = "http://gateway.marvel.com"+link+"?ts=1&apikey="+this.publick+"&hash="+this.hash+"&offset="+this.offset+"&limit=10";
    this.ajax.get(enlace)
      .map(response => response.json())
      .subscribe( data => {this.listaDatos.next(data.data.results)},
                  error=> console.log(error)
    );
  }

  obtenerListaDatos(link){
    this.llamadaApi(link);
    return this.listaDatos.asObservable();
  }

  obtenerDato(id){
    for(let i of this.arrayDatos){
      if(i.id == id){
        return i;
      }
    }
  }

  obtenerDatoApi(url){
    let resultado;
    let enlace = url + "&hash="+this.hash;
    this.ajax.get(enlace).subscribe(data=>this.comic = data);
  }
}