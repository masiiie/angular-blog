import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component'
import { ViewpostComponent } from './viewpost/viewpost.component'
import { IndexComponent } from './index/index.component'

import { Tipo } from './clases/post'


const routes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'posts', component:  ArticuloComponent},
  { path: 'posts/Historia', component:  ArticuloComponent},
  { path: 'posts/Entrevista', component:  ArticuloComponent},
  { path: 'posts/Juventud', component:  ArticuloComponent},
  { path: 'posts/Actualidad', component:  ArticuloComponent},
  { path: 'post/:id', component:  ViewpostComponent}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}