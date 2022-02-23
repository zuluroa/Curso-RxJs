
import { interval } from 'rxjs';
import { take, reduce, tap } from 'rxjs/operators';


const numbers = [1,2,3,4,5];

const totalReducer = ( acumulador: number, valorActual: number ) => 
 acumulador + valorActual;

const total = numbers.reduce( totalReducer, 0 );
console.log('total array', total );

interval(100).pipe(
    take(5),
    tap( console.log ),
    reduce( totalReducer,5 )
)
.subscribe({
    next: val => console.log('next:', val ),
    complete: () => console.log('Complete')
});