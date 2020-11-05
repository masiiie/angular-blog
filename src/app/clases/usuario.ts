export class Persona{
    name1: string
    name2: string
    apellido1: string
    apellido2: string
    foto: string

    constructor(name1, apellido1:string, apellido2:string, name2 ?: string, fotoname ?: string){
        this.name1 = name1
        if(name2) this.name2 = name2
        this.apellido1 = apellido1
        this.apellido2 = apellido2

        this.foto = '../../assets/avatar.jpg'
        if(fotoname) this.foto = `../../assets/${fotoname}`
    }
}

export class Usuario extends Persona{
    correo: string
    tipo: Usuario_Tipo

    constructor(name1, apellido1:string, apellido2:string, tipo:Usuario_Tipo, name2 ?: string, fotoname ?: string){
        super(name1,apellido1,apellido2,name2,fotoname)
        this.tipo = tipo
    }

    suscribirse(correo): void{
        this.correo = correo
    }
}

export enum Usuario_Tipo{
    Autor,
    Publico,
    Admin
}