import {Usuario, Usuario_Tipo, Persona} from './usuario'
import { Tag } from './tag'

export class Post {
    id: number;
    titulo: string;
    autor: Usuario;
    fecha: Date
    tipo: string
    contenido: string
    entrevistado: Persona
    fotos: string[]
    tags: Tag[]
    comments: [{ body: string, date: string, user: Usuario }]
    reacciones: [{ 
        user: Usuario, 
        valor : Reaccion}]

    constructor(id:number, titulo:string, autor: Usuario, fecha:Date, 
        tipo:Tipo, contenido: string, entrevistado?:Persona, fotos?:string[])
    {
        this.id = id
        this.titulo = titulo
        this.autor = autor
        this.fecha = fecha
        this.tipo = (<string>tipo)
        this.contenido = contenido
        while(this.contenido.length < 9000) {
            this.contenido = this.contenido + this.contenido
        }
        console.log(`Contenido final es: ${this.contenido.length} \n\n`)
        this.entrevistado = entrevistado
        if(fotos && fotos.length > 0) this.fotos = fotos.map((v,i,a)=>`../../assets/${v}`)
    }
}


export enum Tipo{
    Entrevista = 'Entrevista',
    Actualidad = 'Actualidad',
    Juventud = 'Juventud cristiana',
    Historia = 'Historia bíblica' 
}

export enum Reaccion{
    Me_gusta,
    Me_encanta,
    Me_ha_hecho_reflexionar
}