import { Observable, Observer } from "rxjs";


const observer: Observer<any>={
    next: value => console.log("Siguiente---->", value),
    error: error => console.warn("Error-->", error),
    complete: () => console.info("completado--->")
}

//const obs$ =  Observable.create()
const obs$ = new Observable<String>(subscriber =>{
    subscriber.next("HOLA")

    /*const a = undefined;
    a.nombre = "David";*/

    subscriber.complete();

    subscriber.next("MUNDO")
});

obs$.subscribe(observer)

/*obs$.subscribe(
    valor => console.log("next: ", valor),
    error => console.warn("error: ", error),
    () => console.info("Completado")
)*/

