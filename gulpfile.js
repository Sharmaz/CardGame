var gulp = require('gulp')
var browserify = require('browserify')
var jadeify = require('jadeify')
var babelify = require('babelify')
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream')

var stylus = require('gulp-stylus')
var concat = require('gulp-concat-css')
var nib = require('nib')

var minify = require('gulp-minify-css')
var uglify = require('gulp-uglify')

var watchify = require('watchify')
var assign = require('lodash.assign')
var livereload = require('gulp-livereload')

var opts = {
	entries: './lib/app.js',	//main file o punto de entrada js
	transform: [babelify, jadeify] //transformaciones
}

opts = assign({}, watchify.args, opts)

gulp.task('build', ['styl', 'js'])

gulp.task('js', function () {
	return generateBundle(browserify(opts))
	
})

gulp.task('styl', function () {
	return styl()

})

gulp.task('styl:livereload', function() {
	return styl().pipe(livereload({ start: true}))
})

gulp.task('styl:watch', function() {
	return gulp.watch(['./lib/app.styl', './lib/**/*.styl'], ['styl:livereload'])
})

gulp.task('js:watch', function() {
	var w = watchify(browserify(opts))
	w.on('update', function(file) {
		//logica de rebuild
		console.log('file modified, rebuilding: ', file)
		var bdle = generateBundle(w).pipe(livereload())
		console.log('rebuild finished')
		return bdle
	})
	//live reload es un singleton (hay una sola instancia viva de ese objeto en toda la aplicación)
	return generateBundle(w).pipe(livereload({ start: true}))
})

gulp.task('watch', ['styl:watch', 'js:watch'])

function styl () {
	return gulp.src('./lib/app.styl') //entry point de styl
		.pipe(stylus({ use: nib() })) //inicializa stylus con nib como plugin
		.pipe(concat('app.css'))
		//.pipe(minify())
		.pipe(gulp.dest('./public/css'))
}

function generateBundle(b) {
	return b
	.bundle()
	.pipe(source('app.js')) 	//archivo destino
	.pipe(buffer())
	//.pipe(uglify())
	.pipe(gulp.dest('./public/'))	//en donde va a estar el archivo destino
}