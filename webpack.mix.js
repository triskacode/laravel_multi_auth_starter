const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .react()
    .postCss('resources/css/app.css', 'public/css', [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
    ])
    .copyDirectory('resources/css/fonts', 'public/fonts')
    .webpackConfig(require('./webpack.config'));

if (mix.inProduction()) {
    mix.version();
}
