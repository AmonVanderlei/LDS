if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js', {scope: '/public/'})
  .then(function(reg) {
    console.log('Registration succeeded. Scope is ' + reg.scope);
  }).catch(function(error) {
    console.log('Registration failed with ' + error);
  });
}