(function() {
    'use strict';

    // TODO - 3.1: Add install and activate event listeners
    self.addEventListener('install', (event) => {
        console.log('New Service working installing');
    });

    self.addEventListener('activate', (event) => {
        console.log('New Service working activating...');
    })

    // My new comment

    self.addEventListener('fetch', function(event) {
        console.log('Fetching:', event.request.url);
    });

})();