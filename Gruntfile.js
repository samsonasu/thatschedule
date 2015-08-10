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
          'app.js': ['src/*.coffee'] // compile and concat into single file
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-web-server');

  grunt.loadNpmTasks('grunt-contrib-coffee');


  grunt.registerTask('default', ['coffee']);

};