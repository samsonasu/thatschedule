module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
     web_server: {
      options: {
        cors: true,
        port: 8000,
        nevercache: true,
        logRequests: true
      },
      foo: 'bar' // For some reason an extra key with a non-object value is necessary
    },
    coffee: {
      compile: {
        files: {
          'app.js': ['src/bootstrap.coffee', 'src/day_view.coffee'] // compile and concat into single file
        }
      }
    },
    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/*.coffee'],
        tasks: ['coffee'],
        options: {
          spawn: false,
        },
      },
      scripts: {
        files: ['css/sass/**/*.sass'],
        tasks: ['compass']
      }
    },
    concurrent: {
        dev: ['watch', 'web_server']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-web-server');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-concurrent');


  grunt.registerTask('default', ['concurrent:dev']);

};