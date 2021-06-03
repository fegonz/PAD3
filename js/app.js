if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js');
}

/*
if (window.caches) {

    //ve al cache e intenta abrir el espacio prueba-1 y sino existe lo crea

    caches.open('prueba-1');
    caches.open('prueba-2');



    caches.open('cache-v1.1').then(cache => {


        //cache.add('/index.html');
        cache.addAll([
            '/index.html',
            '/css/style.css',
            '/img/main.jpg'


        ]).then(() => {
            cache.delete('/css/style.css');

            cache.put('index.html', new Response('Hola Mundo'));


        });

           cache.match('/index.html').then(res => {
              res.text().then(console.log);
          }) 


        //keys devuelve un array de todos los caches

        caches.keys().then(keys => {
            console.log(keys);
        });

    });


    //comprueba si existe la prueba2
    //caches.has('prueba-2').then(console.log);

    //caches.delete('prueba-1').then(console.log);
}
*/
//el cache storage es parte del elemento window