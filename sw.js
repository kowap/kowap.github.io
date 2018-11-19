'use strict';

importScripts('sw-toolbox.js');

toolbox.precache(["index.html","dist/css/main.css","dist/js/main.js","dist/js/main.min.js"]);

toolbox.router.get('/*', toolbox.networkFirst, {
    networkTimeoutSeconds: 5
});