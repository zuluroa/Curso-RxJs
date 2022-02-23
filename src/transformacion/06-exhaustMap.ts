import { interval, fromEvent } from 'rxjs';
import { take, exhaustMap } from 'rxjs/operators';

const interval$ = interval(500).pipe( take(3) );
const click$    = fromEvent( document, 'click' );

click$.pipe(
    exhaustMap( () => interval$ )//no puede emitir otro proceso hasta que no termine el que tiene
)
.subscribe( console.log );