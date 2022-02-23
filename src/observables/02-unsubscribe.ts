import { Observable, Observer } from "rxjs";


const observer: Observer<any>={
    next: value => console.log("Siguiente ", value),
    error: error => console.warn("Error ", error),
    complete: () => console.info("completado ")
}

const intervalo$ = new Observable(subs =>{
    let contador = 0;
    setInterval(() => {
        contador ++;
        subs.next(contador)
    }, 2500)
})

const subs = intervalo$.subscribe(num => console.log("Numero: ", num))
//const subs2 = intervalo$.subscribe(num => console.log("Numero: ", num))
setTimeout(() => {
    subs.unsubscribe();
}, 5000);