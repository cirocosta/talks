'use strict';

var gulp = require('gulp')
  , glob = require('glob')
  , mocha = require('gulp-mocha')
  , gp = require('gulp-protractor')
  , karma = require('karma').server
  , path = require('path')

  , karmaConfs = glob.sync('passos/**/karma.conf.js')
  , protractorConfs = glob.sync('passos/**/protractor.conf.js');


/**
 * Obtencao dos paths das configs do karma
 */

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

/**
 * Tasks
 */

// TODO(ciro) - melhorar a parte de update do
// protractor
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
