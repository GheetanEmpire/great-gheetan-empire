console.log("Great Gheetan Empire App is Running!");
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(() => console.log('Service Worker Registered'))
      .catch(error => console.log('Service Worker Registration Failed:', error));
  }
  