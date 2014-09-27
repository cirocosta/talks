var mozjpeg = require('imagemin-mozjpeg');

/* global module:false */
module.exports = function(grunt) {
  var port = grunt.option('port') || 8000;

  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner:
        '/*!\n' +
        ' * Slides Powered by Reveal.js (http://lab.hakim.se/reveal-js)\n' +
        ' * Generated on <%= grunt.template.today("yyyy-mm-dd, HH:MM") %> \n' +
        ' * \n' +
        ' * MIT licensed, Copyright (C) 2014 Ciro S. Costa (github.com/cirocosta), Mateus Zitelli (github.com/MateusZitelli)\n' +
        ' */'
    },

    uglify: {
      options: {
        banner: '<%= meta.banner %>\n'
      },
      build: {
        files: {
          'js/main.min.js': [ 'lib/js/head.min.js',
                              'js/reveal.js',
                              'js/reveal-config.js']
        }
      }
    },

    sass: {
      main: {
        files: {
          'css/theme/custom.css': 'css/theme/source/custom.scss'
        }
      }
    },

    cssmin: {
      compress: {
        files: {
          'css/main.min.css': [ 'css/reveal.css',
                                'css/theme/custom.css',
                                'lib/css/zenburn.css' ]
        }
      }
    },

    imagemin: {
      dist: {
        options: {
          optimizationLevel: 7,
          use: [mozjpeg()]
        },
        files: [{
          cwd: 'assets/',
          expand: true,
          src: ['*.{png,jpg}'],
          dest: 'assets/'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index.html': 'index.html'
        }
      }
    },

    'string-replace': {
      dist: {
        files: {
          'index.html': ['slides.html']
        },
        options: {
          replacements: [
            {
              pattern: /<!-- main:js -->([\s\S]*)<!-- \/main:js -->/ig,
              replacement: '<script src="js/main.min.js"></script>'
            },
            {
              pattern: /<!-- main:css -->([\s\S]*)<!-- \/main:css -->/ig,
              replacement: '<link rel="stylesheet" href="css/main.min.css">'
            }
          ]
        }
      }
    },

    connect: {
      server: {
        options: {
          port: port,
          base: '.'
        }
      }
    },

    zip: {
      'reveal-js-presentation.zip': [
        'README.md',
        'index.html',
        'css/**',
        'js/**',
        'lib/**',
        'assets/**',
        'plugin/**'
      ]
    },

    watch: {
      options: {
        livereload: true
      },
      main: {
        files: [ 'Gruntfile.js', 'js/reveal.js', 'css/reveal.css' ],
        tasks: 'default'
      },
      theme: {
        files: [ 'css/theme/source/*.scss', 'css/theme/template/*.scss' ],
        tasks: 'themes'
      },
      html: {
        files: ['index.html']
      }
    }

  });

  // Dependencies
  grunt.loadNpmTasks( 'grunt-contrib-imagemin' );
  grunt.loadNpmTasks( 'grunt-contrib-connect' );
  grunt.loadNpmTasks( 'grunt-contrib-htmlmin' );
  grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
  grunt.loadNpmTasks( 'grunt-string-replace' );
  grunt.loadNpmTasks( 'grunt-contrib-uglify' );
  grunt.loadNpmTasks( 'grunt-contrib-watch' );
  grunt.loadNpmTasks( 'grunt-contrib-sass' );
  grunt.loadNpmTasks( 'grunt-zip' );


  // Default task

  var defaultTasks = [ 'themes', 'cssmin', 'uglify' ];

  if (grunt.option('prod'))
    defaultTasks.push('string-replace'),
    defaultTasks.push('htmlmin'),
    defaultTasks.push('imagemin');

  grunt.registerTask( 'default', defaultTasks );

  // Theme task
  grunt.registerTask( 'themes', [ 'sass' ] );

  // Package presentation to archive
  grunt.registerTask( 'package', [ 'default', 'zip' ] );

  // Serve presentation locally
  grunt.registerTask( 'serve', [ 'connect', 'watch' ] );
};
