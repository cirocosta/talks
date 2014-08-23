'use strict';

var gulp = require('gulp');
var glob = require('glob');
var mocha = require('gulp-mocha');
var karma = require('karma').server;
var path = require('path');

var karmaConfs = glob.sync('passos/**/karma.conf.js');


karmaConfs.forEach(function (name) {
  gulp.task('test-karma-' + path.basename(name), function (done) {
    karma.start({
      configFile: path.resolve(__dirname, name),
      singleRun: true
    }, done);
  });
});

gulp.task('test-karma', karmaConfs.map(function (name) {
  return 'test-karma-' + path.basename(name);
}));

gulp.task('test-mocha', function () {
  return gulp.src('./**/test-calculadora.js')
    .pipe(mocha());
});

gulp.task('test', ['test-mocha', 'test-karma']);
