const mix = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 */
require('dotenv').config();
mix.react('resources/js/website.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');