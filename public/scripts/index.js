if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(function (reg) {
      if (reg.installing) {
        console.log('Service worker installing ' + reg.scope);
      } else if (reg.waiting) {
        console.log('Service worker installed ' + reg.scope);
      } else if (reg.active) {
        console.log('Service worker active ' + reg.scope);
      }
    }).catch(function (error) {
      console.log('Registration failed with ' + error);
    });
}