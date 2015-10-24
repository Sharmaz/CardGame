var gulp = require('gulp')
var browserify = require('browserify')
var jadeify = require('jadeify')
var babelify = require('babelify')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')

gulp.task('build', function () {
	return browserify({ 
		entries: './lib/app.js',	//main file o punto de entrada js
		transform: [babelify, jadeify] //transformaciones

	})
	.bundle()
	.pipe(source('app.js')) 	//archivo destino
	.pipe(buffer())
	.pipe(gulp.dest('./public/'))	//en donde va a estar el archivo destino
})