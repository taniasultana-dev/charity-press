// webpack.mix.js
let mix = require('laravel-mix');
mix.options({
    // Don't perform any css url rewriting by default
    processCssUrls: false,
})
mix.sass('scss/app.scss', 'css');