import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class ComicsService {
  private publick = "97ffe99b1a6b0a681c66bddff8048f1e";
  private privatek = "ff05df04fcf7d322f4963c15c1fbc0925f47a091";
  private listaComics: Subject<any> = new Subject<any>();
  private offset = 0;
  private filtro="a";

  constructor(private ajax:Http) {

  }

  comics(){
    let hash = Md5.hashStr(1+this.privatek+this.publick);
    let enlace = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey="
    + this.publick + "&hash=" + hash+"&offset="+this.offset+"&limit=10&titleStartsWith="+this.filtro;
    this.ajax.get(enlace)
      .map(response => response.json())
      .subscribe( data => this.listaComics.next(data.data.results),
                  error=> console.log(error),
                  ()=>console.log("fin")
    );
  }

  obtenerComics(){
    this.comics();
    return this.listaComics.asObservable();
  }

  cambiaOffset(newOffset){
    this.offset += newOffset;
  }
}