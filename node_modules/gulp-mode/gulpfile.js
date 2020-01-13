var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var reporters = require('jasmine-reporters');

gulp.task('test', function () {
  gulp.src('test/*.spec.js')
      .pipe($.jasmine({
        verbose: true,
        reporter: new reporters.JUnitXmlReporter({
          savePath: './test',
        })
      }));
});

gulp.task('default', ['test']);
