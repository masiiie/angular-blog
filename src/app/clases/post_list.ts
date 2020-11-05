import { Post, Tipo } from './post';
import { Usuario, Usuario_Tipo, Persona } from './usuario'

var autor1 : Usuario = new Usuario('Jose', 'Gomez', 'Martinez', Usuario_Tipo.Autor, 'Ariel')
var autor2 : Usuario = new Usuario('Roxana', 'Menendez', 'Urrutia', Usuario_Tipo.Autor, 'Reina', 'chica.jpg')

var entrevistado1 : Persona = new Persona('Amado', 'Benitez', 'Castigo','','chica.jpg')
var entrevistado2 : Persona = new Persona('Henry', 'Jimenez', 'Castigo','','chica.jpg')


export const Posts: Post[] = [
    new Post(1,'El nuevo testamento', 
    new Usuario('Jose', 'Gomez', 'Martinez', Usuario_Tipo.Autor, 'Ariel', 'chica.jpg'),
    new Date(2020, 11, 1), Tipo.Actualidad, 'ajajaja esta es la cronica ajajaja esta es la cronica \
    ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta \
    es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la \
    cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica \
    ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     \
    ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja \
    esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica     ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica ajajaja esta es la cronica', 
    undefined, ['1.jpg', '2.jpg', '3.jpg','4.jpg', '5.jpg',
    '6.jpg', '7.jpg', '8.jpg']),

    new Post(2,'Su gran amor', autor1,
    new Date(2020, 1, 18), Tipo.Historia, 'ajajaja esta es la cronica',
    undefined, ['9.jpg', '10.jpg']),

    new Post(3,'Su amor es grande', autor1,
    new Date(2020, 9, 2), Tipo.Entrevista, 'ajajaja esta es la cronica', entrevistado1),

    new Post(4,'La paz de Cristo', autor1,
    new Date(2020, 12, 4), Tipo.Juventud, 'ajajaja esta es la cronica'),


    new Post(5,'Su misericordia', autor2,
    new Date(2020, 6, 23), Tipo.Actualidad, 'ajajaja esta es la cronica'),

    new Post(6,'La paz de Cristo', autor1,
    new Date(2020, 11, 1), Tipo.Historia, 'ajajaja esta es la cronica'),


    new Post(7,'El es bueno', autor2,
    new Date(2020, 11, 1), Tipo.Juventud, 'ajajaja esta es la cronica'),


    new Post(8,'La paz de Cristo', autor1,
    new Date(2020, 11, 1), Tipo.Entrevista, 'ajajaja esta es la cronica', entrevistado2),
];


