import { Component, OnInit, Input } from '@angular/core';
import {Post, Tipo} from '../clases/post'
//import {Usuario, Usuario_Tipo} from '../clases/usuario'
//import {Tag} from '../clases/tag'
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

//import { faCoffee, faTimes, faCalendar, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons'
import { ArticulosService } from '../articulos.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {
  posts : Post[];
  reloj = faCalendarAlt
  path : string;
  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


  /*
  @Input() type_showing : Tipo;
  @Input() all : boolean = true;
  */

  constructor(private articuloservice:ArticulosService,
    private location:Location, private route:ActivatedRoute, private router:Router) {
   }
   
   
  get_path():void{
    this.path = this.location.path()
  }

  capitalize(input : string) : string{
    return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
  }



   getposts():void{ 
    var s = this.location.path()
    var rutas: { [id: string] : Tipo; } = {
      '/posts/Historia':Tipo.Historia,
      '/posts/Entrevista':Tipo.Entrevista,
      '/posts/Actualidad':Tipo.Actualidad,
      '/posts/Juventud':Tipo.Juventud,
    };

    if(s == '/posts') this.articuloservice.getall().subscribe(posts => this.posts = posts)
    else this.articuloservice.get_post_type(rutas[s]).subscribe(x => this.posts = x)
   }

  ngOnInit(): void {
    console.log(`Me llamaron!!!   path:${this.location.path()}`)
    this.getposts()
    this.get_path()
  }
}