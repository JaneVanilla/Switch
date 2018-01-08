module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');

    grunt.initConfig({
        less: {
        style: {
          files: {
            "css/style.css":"less/style.less"
          }
        }
      },
      postcss: {
      options: {
      map: true, // inline sourcemaps
      processors: [
        require('pixrem')(), // add fallbacks for rem units
        require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
        require('cssnano')() // minify the result
      ]
    },
    dist: {
      src: 'css/*.css'
    }
  },
          watch: {
          style: {
          files: ['less/**/*.less', '*.html'], 
          tasks: ['less', 'postcss'], 
          options: {
            livereload: true,
          },
        },
      },
      });
};



