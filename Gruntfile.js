'use strict'

module.exports = function(grunt)
{

	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-html-validation');

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		clean: {
			options: {
				force: true
			},
			dev: {
				src: 'build/'
			}
		},

		sass: {
			dist: {
				files: [{
					expand: true,
					cwd: 'app/sass/',
					src: ['**/*.scss'],
					dest: 'build/style/',
					ext: '.css'
				}]
			}
		},

		jade: {
			compile: {
				options: {
					client: false,
					pretty: true,
					doctype: 'html'
				},
				files: [{
					expand: true,
					cwd: 'app/jade/',
					src: ['**/*.jade'],
					dest: 'build/',
					ext: '.html'
				}]
			}
		},

		watch: {
			options: {
				spawn: false
			},
			jade: {
				files: ['**/*.jade'],
				tasks: ['jade']
			},
			sass: {
				files: ['app/sass/**/*'],
				tasks: ['sass']
			}
		}

	});

	grunt.registerTask('build', [
		'sass',
		'jade'
	]);

	grunt.registerTask('default', [
		'clean:dev',
		'build',
		'watch'
	]);

}