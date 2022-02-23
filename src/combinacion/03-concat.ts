import { interval, concat, of } from 'rxjs';
import { concatMap, take } from 'rxjs/operators';

const interval$ = interval(1000);

concat(//SE CREA UN DIFERENTES CONCATENACIONES DE FUNCIONES
    interval$.pipe( take(3) ), //CUANDO SE COMPLETA ESTE OBSERVABLE COMIENZA EL OTRO
    interval$.pipe( take(2) ),
    of(1)
).subscribe( console.log  )