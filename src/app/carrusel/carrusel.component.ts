import { Component, OnInit } from '@angular/core';
import { Post } from '../clases/post'

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {
  
  post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
