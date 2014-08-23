'use strict';

var gulp = require('gulp');
var glob = require('glob');
var mocha = require('gulp-mocha');
var karma = require('karma').server;
var path = require('path');

var karmaConfs = glob.sync('passos/**/karma.conf.js');


karmaConfs.forEach(function (name) {
  var cfg = {
    configFile: path.resolve(__dirname, name),
    singleRun: true
  };

  if (process.argv[3] === '--headless')
    cfg.browsers = ['PhantomJS'];

  gulp.task('test-karma-' + path.relative(__dirname, name), function (done) {
    karma.start(cfg, done);
  });
});

gulp.task('test-karma', karmaConfs.map(function (name) {
  return 'test-karma-' + path.relative(__dirname, name);
}));

gulp.task('test-mocha', function () {
  return gulp.src('./passos/**/test-calculadora.js')
    .pipe(mocha());
});

gulp.task('test', ['test-mocha', 'test-karma']);
