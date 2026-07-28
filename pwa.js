// pwa.js — ANSTORE © 2019
(function(){
  if(typeof STORE==='undefined')return;
  const manifest={
    name: STORE.name+' — Supplier Grosir HP © 2019',
    short_name: 'ANSTORE',
    description: 'ANSTORE Supplier Grosir HP — Sejak 2019 — Manajemen Pesanan, Pengiriman, Piutang',
    start_url:'./index.html',
    display:'standalone',
    orientation:'any',
    background_color:'#0a0a0b',
    theme_color: THEME&&THEME.hex?THEME.hex:'#10b981',
    icons:[]
  };
  const blob=new Blob([JSON.stringify(manifest)],{type:'application/json'});
  const link=document.createElement('link'); link.rel='manifest'; link.href=URL.createObjectURL(blob);
  document.head.appendChild(link);
  if('serviceWorker' in navigator){
    window.addEventListener('load',function(){
      navigator.serviceWorker.register('sw.js?v=2019').catch(function(e){console.warn('SW fail',e)})
    })
  }
})();
