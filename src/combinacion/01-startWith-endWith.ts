import { of } from 'rxjs';
import { startWith, endWith } from 'rxjs/operators';



const numeros$ = of(1,2,3).pipe(
    startWith('a','b','c'),//EMPIEZA PRIMERO CON ESTO
    endWith('x','y','z'),//TERMINA CON ESTO
);



numeros$.subscribe( console.log );