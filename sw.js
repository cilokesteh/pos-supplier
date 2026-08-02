/* Copyright © 2019 ANSTORE | All Rights Reserved | Proprietary */

// sw.js — service worker
const CACHE = 'anstore-supplier-v2019-4';
const ASSETS = [
  './',
  './index.html',
  './config.js',
  './pwa.js',
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/jspdf-autotable/3.8.2/jspdf.plugin.autotable.min.js',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js',
  'https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js'
];

self.addEventListener('install', function(e) {
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(ASSETS).catch(function(){}) }));
  self.skipWaiting();
});
self.addEventListener('activate', function(e) {
  e.waitUntil(caches.keys().then(function(keys){ return Promise.all(keys.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)})) }));
  self.clients.claim();
});
self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(function(resp){
    return resp || fetch(e.request).then(function(r){
      if(r && r.status===200 && e.request.method==='GET'){ const cl=r.clone(); caches.open(CACHE).then(function(c){c.put(e.request,cl)}) }
      return r;
    }).catch(function(){return resp})
  }))
});
