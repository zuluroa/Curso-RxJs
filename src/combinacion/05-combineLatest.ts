import { fromEvent, combineLatest, from } from 'rxjs';
import { pluck } from 'rxjs/operators';

/*const keyup$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');

combineLatest( 
     keyup$.pipe( pluck('type') ), 
     click$.pipe( pluck('type') )
 ).subscribe( console.log );*/

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';

input2.placeholder = '*********';
input2.type = 'password'

document.querySelector('body').append(input1, input2);


const getInputStream = ( elem: HTMLElement ) => 
    fromEvent<KeyboardEvent>( elem, 'keyup' ).pipe(
        pluck<KeyboardEvent>('target','value'));


combineLatest(//UNE EL ULTIMO FLUJO DE TODOS LOS FLUJOS
    getInputStream( input1 ),
    getInputStream( input2 ),
).subscribe( console.log )