import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import {Md5} from 'ts-md5/dist/md5';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class ApiService {
  private publick = "97ffe99b1a6b0a681c66bddff8048f1e";
  private privatek = "ff05df04fcf7d322f4963c15c1fbc0925f47a091";
  private ts=1;
  private url = "http://gateway.marvel.com";
  private listaComics: Subject<any> = new Subject<any>();
  private offset = 0;

  constructor(private ajax:Http) {

  }

  comics(link){
    let hash = Md5.hashStr(this.ts+this.privatek+this.publick);
    let enlace = this.url + link + "?ts=" + this.ts + "&apikey=" + this.publick + "&hash=" + hash+"&offset="+this.offset;
    this.ajax.get(this.url + link + "?ts=" + this.ts + "&apikey=" + this.publick + "&hash=" + hash+"&offset="+this.offset)
      .map(response => response.json())
      .subscribe( data => this.listaComics.next(data.data.results),
                  error=> console.log(error),
                  ()=>console.log("fin")
    );
  }

  obtenerComics(link){
    this.comics(link);
    return this.listaComics.asObservable();
  }

  cambiaOffset(newOffset){
    this.offset = newOffset;
    console.log(this.offset);
  }
}