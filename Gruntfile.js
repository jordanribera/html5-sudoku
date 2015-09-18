'use strict'

module.exports = function(grunt)
{

	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-html-validation');

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		sass:{
			dist: {
				files: {
					'build/style/board.css' : 'sass/board.scss'
				}
			}
		}

	});

	grunt.registerTask('build', [
		'sass'
	]);

	grunt.registerTask('default', [
		'build'
	]);

}