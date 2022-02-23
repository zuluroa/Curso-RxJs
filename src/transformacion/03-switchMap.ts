import { fromEvent } from 'rxjs';
import {  pluck,switchMap } from 'rxjs/operators';

import { ajax } from 'rxjs/ajax';


const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );


const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );


const url = 'https://httpbin.org/delay/1?arg='; // + fernando

input$.pipe(
    pluck('target','value'),
    switchMap( texto => ajax.getJSON(url + texto)  ) //CANCELA LA ULTIMA PETICIÓN
).subscribe( console.log );