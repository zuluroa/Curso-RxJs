import { fromEvent } from 'rxjs';
import { map, sampleTime } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>( document, 'click');

click$.pipe(
    sampleTime(2000),//Emite el ultimo valor
    map( ({ x, y }) => ({ x, y }) ),
).subscribe( console.log );