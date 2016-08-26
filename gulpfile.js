var gulp = require('gulp');
// https://www.npmjs.com/package/gulp-webserver
var webserver = require('gulp-webserver');
var gutil = require('gulp-util');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var htmlmin = require('gulp-htmlmin');
var rename = require('gulp-rename');
var replace = require('gulp-replace');
var watch = require('gulp-watch');

gulp.task('serve', [ /*'watch'*/ ], function() {
	gulp.src('')
		.pipe(webserver({
			livereload: {
				enable: false,
				filter: function(fileName) {
					if (fileName.match(/LICENSE|\.json$|\.md$|src$|lib$|node_modules/)) { // exclude all source maps from livereload
						return false;
					} else {
						//console.info(fileName);
						return true;
					}
				}
			},
			directoryListing: true,
			open: true
		}));
});

gulp.task('default', []);