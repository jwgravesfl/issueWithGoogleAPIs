"use strict";var precacheConfig=[["/revelermusic/index.html","6268fba2cc76d0d980d339c48373c99d"],["/revelermusic/static/css/main.97f068ba.css","6ff85c759433b5a091de718d0e5e8e7b"],["/revelermusic/static/js/main.122bb673.js","2c75b89c322d9de128a35a90886d06f1"],["/revelermusic/static/media/421CDLogo.16dde5d6.png","16dde5d618e922ca53577dfce87f16ca"],["/revelermusic/static/media/Crowbar.87e9c4a8.jpg","87e9c4a8f2e68ecd01a05de79f05b555"],["/revelermusic/static/media/DJMixerLaptops.4cc73b57.jpg","4cc73b57c7d220e8d5acb4699823f266"],["/revelermusic/static/media/FL.e8a2fcca.jpg","e8a2fccae84ae09cc6216fc0afc5ae4d"],["/revelermusic/static/media/FoxnHound.f8e202b4.jpg","f8e202b4741019012367fec1d7045068"],["/revelermusic/static/media/Gaspars.8ff0a990.jpg","8ff0a9903872af16986dbc952accd395"],["/revelermusic/static/media/J&Heather.12ff3fd5.png","12ff3fd57de77ca817c2e0ac95189dbf"],["/revelermusic/static/media/LooseysGood.324ffecc.jpg","324ffecc3c2db9414a33d1fea31f15d4"],["/revelermusic/static/media/MoSS.03bb2e2f.jpg","03bb2e2fa36126764415095367c4c2d3"],["/revelermusic/static/media/RevelerLogo.0385ef24.png","0385ef249887ee910b55f0c5743015c2"],["/revelermusic/static/media/dJ.e3d89493.jpg","e3d89493ec5f1dc9299c772cd86a24ff"],["/revelermusic/static/media/landingPage.dba9f1fb.jpg","dba9f1fb6d003a2e9f1ec8001691163b"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var r=new URL(e);return"/"===r.pathname.slice(-1)&&(r.pathname+=t),r.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,r,a){var n=new URL(e);return a&&n.pathname.match(a)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(r)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var r=new URL(t).pathname;return e.some(function(e){return r.match(e)})},stripIgnoredUrlParameters=function(e,r){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return r.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],r=e[1],a=new URL(t,self.location),n=createCacheKey(a,hashParamName,r,/\.\w{8}\./);return[a.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(r){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!r.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var r=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!r.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,r=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(r))||(r=addDirectoryIndex(r,a),e=urlsToCacheKeys.has(r));var n="/revelermusic/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(r=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(r)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(r)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});