'use strict'

module.exports = function(grunt)
{

	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-string-replace');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-html-validation');

	grint.initConfig({

		pkg: grunt.file.readJSON('package.json');

		sass:{
			dist: {
				files: {
					'style/board.css' : 'sass/style.css'
				}
			}
		}

	});

	grunt.registerTask('build', [
		'sass'
	]);

}