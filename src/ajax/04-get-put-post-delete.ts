import { ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

ajax.get( url ).subscribe( console.log  );

ajax.post( url, {
    id: 1,
    nombre: 'David'
}, {
    'token': 'SI FUNCIONA?'
}).subscribe( console.log );

ajax.put( url, {
     id: 1,
     nombre: 'David'
 }, {
     'token': 'SI FUNCIONA?'
}).subscribe( console.log  );


ajax({
    url: url,
    method: 'DELETE',
    headers: {
        'token': 'SI FUNCIONA?'
    },
    body: {
        id: 1,
        nombre: 'David'
    }
}).subscribe( console.log );