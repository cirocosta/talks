'use strict';

var gulp = require('gulp');
var glob = require('glob');
var mocha = require('gulp-mocha');
var gp = require('gulp-protractor');
var karma = require('karma').server;
var path = require('path');

var karmaConfs = glob.sync('passos/**/karma.conf.js');
var protractorConfs = glob.sync('passos/**/protractor.conf.js');


karmaConfs.forEach(function (name) {
  var cfg = {
    configFile: path.resolve(__dirname, name),
    singleRun: true
  };
  var p = path.relative(__dirname, name);

  if (process.argv[3] === '--headless')
    cfg.browsers = ['PhantomJS'];

  gulp.task('test-karma-' + p, function (done) {
    karma.start(cfg, done);
  });
});

gulp.task('test-protractor', function () {
  gp.webdriver_update(function (code) {
    if (code)
      throw new Error('Error while updating WebDriver');
  });

  return gulp.src(['./passos/5/spec.js'])
    .pipe(gp.protractor({
      configFile: './passos/5/protractor.conf.js'
    }))
    .on('error', function (e) {
      throw e;
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
