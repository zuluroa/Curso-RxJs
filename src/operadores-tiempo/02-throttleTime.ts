import { fromEvent, asyncScheduler } from 'rxjs';
import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';


const click$ = fromEvent( document, 'click' );

click$.pipe(
    throttleTime(3000) //No va a emitir nada hasta que pase el tiempo
).subscribe( console.log );

const input = document.createElement('input');
document.querySelector('body').append( input );


const input$ = fromEvent( input, 'keyup' );

input$.pipe(
    throttleTime(3000, asyncScheduler, {
        leading: false,
        trailing: true
    }),
    pluck('target','value'),
    distinctUntilChanged()
).subscribe( console.log );