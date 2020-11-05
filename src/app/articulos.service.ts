import { Injectable } from '@angular/core';
import { Post, Tipo } from './clases/post'
import { Posts } from './clases/post_list'
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ArticulosService {
  
  articulos: Post[] = Posts
  
  comparingposts_bydate = function (a:Post, b:Post) {
    if(a.fecha < b.fecha) return 1
    else if(a.fecha==b.fecha) return 0
    else return -1
  }
  
  constructor() { }

  getpost(id:number) : Observable<Post>{
    return of(this.articulos.filter((v,i,a) => v.id == id)[0])
  }

  getall() : Observable<Post[]> {
    // ordenado por fecha
    return of(this.articulos.sort(this.comparingposts_bydate)) 
  }

  get_post_type(tipo: Tipo) : Observable<Post[]> {
    return of(this.articulos.filter((value, i, array) =>  
    array[i].tipo == tipo).sort(this.comparingposts_bydate))
  }
}
