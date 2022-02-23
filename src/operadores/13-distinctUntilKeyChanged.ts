import { of, from } from 'rxjs';
import { distinctUntilChanged , distinctUntilKeyChanged  } from 'rxjs/operators';

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
        nombre: 'Yo'
    },
    {
        nombre: 'Naruto'
    },
    {
        nombre: 'Goku'
    },
];

from( personajes ).pipe(
    distinctUntilKeyChanged( "nombre")
).subscribe( console.log );