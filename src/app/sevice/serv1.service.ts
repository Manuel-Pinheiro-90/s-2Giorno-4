import { Injectable } from '@angular/core';
import { Iimg } from '../module/iimg';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Serv1Service {

apiUrl:string ='https://jsonplaceholder.typicode.com/photos'

post:Iimg[]=[]

preferiti:Iimg[]=[]

cardsub = new BehaviorSubject<Iimg[]>([])
card$ = this.cardsub.asObservable()


  constructor(private http:HttpClient) { }


  getAllRobbe():Observable<Iimg[]>{
    return this.http.get<Iimg[]>(this.apiUrl)
  }

  addToFavourites(product:Iimg):void{this.preferiti.push(product)

  }


  remuve(product:Iimg){this.post =this.post.filter(p=>p!=product)
    this.cardsub.next(this.post)
  }






}
