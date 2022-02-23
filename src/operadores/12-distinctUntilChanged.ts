import { of, from } from 'rxjs';
import { distinct, distinctUntilChanged  } from 'rxjs/operators';

const numeros$ = of(1,'1',1,2,2,3,2,3,4,5,3,5,'6' );

numeros$.pipe(
    distinctUntilChanged() 
).subscribe( console.log );

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Meteoro'
    },
    {
        nombre: 'Goku'
    },
    {
        nombre: 'Naruto'
    },
    {
        nombre: 'Yo'
    },
    {
        nombre: 'Meteoro'
    },
    {
        nombre: 'Naruto'
    },
    {
        nombre: 'Goku'
    },
];

from( personajes ).pipe(
    distinctUntilChanged ( (ant, act) => ant.nombre === act.nombre )
).subscribe( console.log );