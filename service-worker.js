
var urlsToCache = [
    '/',
    '/stylesheets/stylesheet.css',
    'index.html'
];

// Set the callback for the install step
self.addEventListener('install', function(event) {
    // Perform install steps
    console.log('insatalado com sucesso');
    console.log(urlsToCache);
});