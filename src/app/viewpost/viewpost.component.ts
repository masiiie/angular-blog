import { Component, OnInit } from '@angular/core';
import { Post } from '../clases/post'
import { ActivatedRoute } from '@angular/router';
import { ArticulosService } from '../articulos.service'
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {

  post:Post;
  reloj = faCalendarAlt
  options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  constructor(private route : ActivatedRoute, private serviceart:ArticulosService) { }

  getpost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.serviceart.getpost(id).subscribe(x => this.post = x)
    /*
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
    */
  }

  ngOnInit(): void {
    this.getpost()
  }

}
