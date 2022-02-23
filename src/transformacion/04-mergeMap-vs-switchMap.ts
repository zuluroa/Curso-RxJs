import { fromEvent, interval } from 'rxjs';
import { mergeMap, switchMap } from 'rxjs/operators';



const click$    = fromEvent( document, 'click' );
const interval$ = interval(1000);


click$.pipe(
    switchMap( () => interval$ ),//CANCELA LA ULTIMA PETICION
    // mergeMap( () => interval$ ), //MENTIENE TODAS LAS PETICIONES ACTIVAS
).subscribe( console.log );