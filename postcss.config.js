const cssbyebye = require('css-byebye');
var fs = require('fs');
var scopify = require('postcss-scopify');

const purgecss = require('@fullhuman/postcss-purgecss')({
    // Paths to all of the template files in your project
    content: ['./src/**/*.html', './src/**/*.vue'],
    // whitelistPatterns: [/xs$/, /sm$/, /md$/, /lg$/],
    whitelist: ['xs', 'sm', 'md', 'lg'],
    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
    /* plugins: {
    autoprefixer: {}
  } */
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        require('precss'),
        ...(process.env.NODE_ENV === 'production' ? [purgecss] : [purgecss])
        // require('postcss-scopify')('#scope')
        // require('css-byebye')({
        //     rulesToRemove: [/^(?!#app.*).*/g],
        //     map: false
        // })
    ]
};
