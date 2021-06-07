ACHE_NAME = 'cache-1';

const CACHE_STATIC_NAME = 'static-v1';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
const CACHE_INMUTABLE_NAME = 'inmutable-v1';



function limpiarCache(cacheName, numeroItems) {
    caches.open(cacheName).then(cache => {
        return cache.keys().then(keys => {
            if (keys.length > numeroItems) {
                cache.delete(keys[0]).then(limpiarCache(cacheName, numeroItems));
            }
        });
    })


}



self.addEventListener('install', e => {

    const cacheProm = caches.open(CACHE_STATIC_NAME).then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/css/style.css',
                '/js/app.js',
                '/manifest.json'


            ])
        })
        //para agnadir librerias de bootstrap si las hubiese


    e.waitUntil(Promise.all([cacheProm, cacheInmutable]));
});


self.addEventListener('activate', e => {

    const activacion = caches.keys().then(keys => {

        keys.forEach(key => {
            if (key !== CACHE_STATIC_NAME && key.includes('static')) {
                return caches.delete(key);
            }
        })
    })

    e.waitUntil(activacion);

})


self.addEventListener('fetch', e => {



    //Cache with Network Fallback then Cache
    //el match se va a todos los caches que esten en este dominio y va a buscar y retornar uno que
    //coincida con el e.request
    const respuesta = caches.match(e.request).then(res => {

        if (res) return res;

        //no existe el archivo que esta pidiendo
        //tengo que ir a la web

        console.log('No existe', e.request.url);

        return fetch(e.request).then(newResp => {

            caches.open(CACHE_DYNAMIC_NAME).then(cache => {
                cache.put(e.request, newResp);
                limpiarCache(CACHE_DYNAMIC_NAME, 50);
            });
            return newResp.clone();
        });
    });




    e.respondWith(respuesta);


})