module.exports = function (grunt) {
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      watch: {
          sass: {
              files: ['sass/**/*.{scss,sass}','sass/_partials/**/*.{scss,sass}'],
              tasks: ['sass:dist']
          },
          livereload: {
              files: ['*.html', '*.php', 'js/**/*.{js,json}', 'css/*.css','img/**/*.{png,jpg,jpeg,gif,webp,svg}'],
              options: {
                  livereload: true
              }
          }
      },
      sass: {
          options: {
              sourceMap: true,
              outputStyle: 'expanded'
              //options: expanded, compressed and sourceComments
          },
          dist: {
              files: {
                  'css/styles.css': 'sass/styles.scss'
              }
          }
      },
      concat: {
        options: {
            separator: ';'
        },
        dist: {
            src: [
                'node_modules/jquery/dist/jquery.js'
            ],
            dest: 'build/js/all-libs.js'
        }
    },

    uglify: {
        build: {
            src: ['build/js/all-libs.js'],
            dest: 'build/js/all-libs.min.js'
        }
    },
      copy: {
          main: {
              files: [
                   {
                       expand: true,
                       flatten: true,
                       cwd: 'node_modules/bootstrap/dist/css/',
                       src: ['**'], dest: 'build/css'
                   },
                   {
                       expand: true,
                       flatten: true,
                       cwd: 'node_modules/bootstrap/dist/fonts/',
                       src: ['**'], dest: 'build/fonts/'
                   },
                   {
                       expand: true,
                       flatten: true,
                       cwd: 'node_modules/font-awesome/css/',
                       src: ['**'], dest: 'build/css/'
                   },
                   {
                       expand: true,
                       flatten: true,
                       cwd: 'node_modules/font-awesome/fonts/',
                       src: ['**'], dest: 'build/fonts/'
                   }
               ]
           }
       }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat', 'uglify', 'copy', 'sass:dist', 'watch']);
};
