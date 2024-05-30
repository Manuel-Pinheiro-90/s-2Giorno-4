import { Serv1Service } from './../../sevice/serv1.service';
import { Iimg } from './../../module/iimg';
import { Component } from '@angular/core';



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


        this.prodsvc.card$.subscribe(img=>this.preferiti.push(img))



}

FavorOnclick(photo:Iimg){
  this.prodsvc.addToFavourites(photo)
}





}
