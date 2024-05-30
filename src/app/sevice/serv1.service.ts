import { Injectable } from '@angular/core';
import { Iimg } from '../module/iimg';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Serv1Service {

apiUrl:string ='https://jsonplaceholder.typicode.com/photos'

post:Iimg[]=[]




cardsub = new Subject<Iimg>()
card$ = this.cardsub.asObservable() //sunbject per i like


  constructor(private http:HttpClient) { }


  getAllRobbe():Observable<Iimg[]>{
    return this.http.get<Iimg[]>(this.apiUrl)
  }

  addToFavourites(product:Iimg):void{this.cardsub.next(product)

  }








}
