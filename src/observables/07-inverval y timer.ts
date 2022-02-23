import { interval, timer } from 'rxjs';

const observer = {
    next: val => console.log("next: ", val),
    complete: () => console.log("completado: ")
}

const interval$ = interval(1000);
//const timer$ = timer(2000);
//const timer$ = timer(0);

const hoyEn5 = new Date();//AHORA
hoyEn5.setSeconds(hoyEn5.getSeconds()+5)

const timer$ = timer(hoyEn5);

console.log("inicio");
//interval$.subscribe(observer);
timer$.subscribe(observer)
console.log("fin");
 