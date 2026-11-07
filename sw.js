/* Handstand-Coach Service Worker. VERSION bei jeder neuen App-Version ändern. */
var VERSION="20261107-1707",SHELL="hs-shell-"+VERSION,RUNTIME="hs-runtime-v1";
var CORE=["./","./index.html","./manifest.webmanifest","./icons/icon-192.png","./icons/icon-512.png","./icons/icon-maskable-512.png","./icons/apple-touch-icon.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(SHELL).then(function(c){return c.addAll(CORE)}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k.indexOf("hs-shell-")===0&&k!==SHELL}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
/* Externe Dateien (MediaPipe, Modell): beim ersten Mal laden und speichern, danach auch offline */
function isExt(u){return /(^|\.)jsdelivr\.net$|(^|\.)storage\.googleapis\.com$|(^|\.)fonts\.(googleapis|gstatic)\.com$/.test(new URL(u).hostname)}
self.addEventListener("fetch",function(e){var r=e.request;if(r.method!=="GET")return;var u=new URL(r.url);
 if(u.origin===location.origin){
  /* Seite: zuerst Netzwerk (damit Updates ankommen), sonst Speicher */
  if(r.mode==="navigate"||u.pathname.slice(-1)==="/"||/index\.html$/.test(u.pathname)){e.respondWith(fetch(r).then(function(res){var c=res.clone();caches.open(SHELL).then(function(x){x.put("./index.html",c)});return res}).catch(function(){return caches.match("./index.html").then(function(m){return m||caches.match("./")})}));return}
  e.respondWith(caches.match(r).then(function(m){return m||fetch(r).then(function(res){if(res.ok){var c=res.clone();caches.open(SHELL).then(function(x){x.put(r,c)})}return res})}));return}
 if(isExt(r.url)){e.respondWith(caches.open(RUNTIME).then(function(c){return c.match(r).then(function(m){if(m)return m;return fetch(r).then(function(res){if(res&&(res.ok||res.type==="opaque"))c.put(r,res.clone());return res})})}))}});
