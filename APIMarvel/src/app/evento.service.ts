import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class EventoService {
  private publick = "97ffe99b1a6b0a681c66bddff8048f1e";
  private privatek = "ff05df04fcf7d322f4963c15c1fbc0925f47a091";
  private listaEventos: Subject<any> = new Subject<any>();
  private offset = 0;
  private evento;

  constructor(private ajax:Http) { }
  
  eventos(){
    let hash = Md5.hashStr(1+this.privatek+this.publick);
    let enlace = "http://gateway.marvel.com/v1/public/events?ts=1&apikey="
    + this.publick + "&hash=" + hash+"&offset="+this.offset+"&limit=10";
    this.ajax.get(enlace)
      .map(response => response.json())
      .subscribe( data => {this.listaEventos.next(data.data.results)},
                  error=> console.log(error)
    );
  }

  obtenerEventos(): Observable<any>{
    this.eventos();
    return this.listaEventos.asObservable();
  }

  cargarDetalle(evento){
    this.evento = evento;
  }

  get obtenerevento(){
    return this.evento;
  }

}
