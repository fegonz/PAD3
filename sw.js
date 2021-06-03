self.addEventListener('install', e => {

    const cacheProm = caches.open('cache-1').then(cache => {
        return cache.addAll([
            '/',
            '/index.html',
            '/js/app.js',
            '/css/style.css'



        ])
    })
    e.waitUntil(cacheProm);
});


self.addEventListener('fetch', e => {



    //2-Cache with Network Fallback
    //caches.match(e.request);




    //e.respondWith();

    //1- Cache Only
    //el match se va a todos los caches que esten en este dominio y va a buscar y retornar uno que
    //coincida con el e.request
    e.respondWith(caches.match(e.request));
})





















/* const offlineResp = new Response(`
Bienvenido a mi pagina Web

Disculpa, para usarla necesitas Internet
    
    
`); */

/* 
    const offlineResp = new Response(`
    <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Mi PWA</title>

           
        </head>

        <body class="container p-3">


        <h1>Offline Mode</h1>

        </body>
        </html>
    
    `, {
        headers: {
            'Content-Type': 'text/html'
        }
    }); */











/* 
el request es lo que se está solicitando, puede ser que el archivo no exista
Para cada peticion fetch va devolver lo mismo que se esta pidiendo
self.addEventListener('fetch', event =>{
    event.respondWith(fetch(event.request));
}); */