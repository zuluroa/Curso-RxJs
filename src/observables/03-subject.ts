import { Observable, Observer, Subject } from "rxjs";


const observer: Observer<any>={
    next: value => console.log("Siguiente ", value),
    error: error => console.warn("Error ", error),
    complete: () => console.info("completado ")
}

const intervalo$ = new Observable<number>(subs =>{
  const invervalID = setInterval(
      () => subs.next(Math.random()),1000)

    return () => clearInterval(invervalID)
})

const subject$ = new Subject()

intervalo$.subscribe(subject$)

//const subs1 = intervalo$.subscribe(console.log)

const subs1 = subject$.subscribe(console.log)


setTimeout( () => {
    subject$.next(10);
    subject$.complete();
}, 3500)