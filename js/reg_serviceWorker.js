"use strict";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/serviceWorker.js')
    .then(reg => {
      // Registration was successful
      console.log('ServiceWorker registration successful: ', reg.scope);
    }).catch(err => {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}
