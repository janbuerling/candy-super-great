/* eslint-disable */
/* jshint ignore */
module.exports = function (grunt) {
  grunt.initConfig({

    // This generates the static font assets from the config file provided via the cli
    // We need to exclude the every css files here, because the grunt-fontello-api does not provide the right paths.
    fontello: {
      fetch: {
        options: {
          config: './src/components/common/Icon/font/config.json',
          fonts: './src/components/common/Icon/font/',
          exclude: [
            'animation.css',
            'fontello-codes.css',
            'fontello-embedded.css',
            'fontello-ie7.css',
            'fontello-ie7-codes.css',
            'fontello.scss',
            'fontello.woff2'
          ],
          force: true,
        }
      }
    },

    // This renders the react component from the fetched files
    'fontello-react': {
      build: {
        options: {
          adapter: 'fontello', // Only adapter available currently
          svgPath: './src/components/common/Icon/font/fontello.svg', // Path to SVG
          woffPath: './src/components/common/Icon/font/fontello.woff', // Path to WOFF
          eotPath: './src/components/common/Icon/font/fontello.eot', // Path to EOT
          ttfPath: './src/components/common/Icon/font/fontello.ttf', // Path to TTF
          jsTplPath: './src/components/common/Icon/fontello-es2016.tpl', // React component template (to use your own)
          cssOutputPath: './src/assets/styles/fontello.scss',
          jsOutputPath: './src/components/common/Icon/index.jsx', // Location of React component output
        }
      },
    }
  });

  // Loads depending NPM-Tasks
  grunt.loadNpmTasks('grunt-fontello-react');
  grunt.loadNpmTasks("grunt-fontello");

  // Register Task for executing
  grunt.registerTask('createiconfont', ['fontello:fetch', 'fontello-react:build']);
};
