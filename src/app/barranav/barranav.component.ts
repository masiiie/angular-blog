import { Component, OnInit } from '@angular/core';
import { faCoffee, faTimes, faCalendar, faSearch } from '@fortawesome/free-solid-svg-icons';
import {faCalendarAlt} from '@fortawesome/free-regular-svg-icons'
import { Tipo } from '../clases/post'

@Component({
  selector: 'app-barranav',
  templateUrl: './barranav.component.html',
  styleUrls: ['./barranav.component.css']
})
export class BarranavComponent implements OnInit {
  search = faSearch
  tipo = []
  titulos = {
    'Actualidad':'Actualidad', 
    'Juventud cristiana':'Juventud cristiana',
    'Entrevista':'Entrevistas',
    'Historia bíblica':'Historias bíblicas'
  }

  constructor() { }

  ngOnInit(): void {
    for(var x in Tipo) this.tipo.push(Tipo[x])
  }

}
