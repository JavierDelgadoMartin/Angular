import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class PersonajesService {
  private publick = "97ffe99b1a6b0a681c66bddff8048f1e";
  private privatek = "ff05df04fcf7d322f4963c15c1fbc0925f47a091";
  private listaPersonajes: Subject<any> = new Subject<any>();
  private offset = 0;

  constructor(private ajax:Http) { }
  
  personajes(){
    let hash = Md5.hashStr(1+this.privatek+this.publick);
    let enlace = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey="
    + this.publick + "&hash=" + hash+"&offset="+this.offset+"&limit=10";
    this.ajax.get(enlace)
      .map(response => response.json())
      .subscribe( data => {this.listaPersonajes.next(data.data.results)},
                  error=> console.log(error)
    );
  }

  obtenerPersonajes(): Observable<any>{
    this.personajes();
    return this.listaPersonajes.asObservable();
  }
}
