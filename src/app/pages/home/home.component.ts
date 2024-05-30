import { Iimg } from './../../module/iimg';
import { Component } from '@angular/core';
import { Serv1Service } from '../../sevice/serv1.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  post:Iimg []=[];
  preferiti:Iimg []=[]

  constructor(private prodsvc:Serv1Service ){}

  ngOnInit(){
    this.prodsvc.getAllRobbe().subscribe(posts=>
      {this. post = posts
        this.post = this.post.slice(0,10) //riduco il numero delle immagini che sono troppe
        console.log(this.post)
      })
  }

  remuve(post:Iimg):void{this.prodsvc.remuve(post)
    console.log(post)
  }


  FavorOnclick(pref:Iimg):void{
    this.prodsvc.addToFavourites(pref)
    console.log(pref)
    }




}
