module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
	  htmlmin: {                                     // Task 
	    dist: {                                      // Target 
	      options: {                                 // Target options 
	        removeComments: true,
	        collapseWhitespace: true
	      },
	      files: {                                   // Dictionary of files 
	        'build/index.html': 'src/index.html'     // 'destination': 'source' 
	      }
	    },
	  },
		  cssmin: {
	  target: {
	    files: [{
	      expand: true,
	      cwd: 'src',
	      src: ['*.css', '!*.min.css'],
	      dest: 'build/css',
	      ext: '.min.css'
	    }]
	  }
	},
	
	 
	//grunt.registerTask('default', ['htmlmin']);
	  });

  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // 默认被执行的任务列表。
  grunt.registerTask('default', ['uglify','htmlmin','cssmin']);

};