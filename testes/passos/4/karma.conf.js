module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],

    files: [
        "../../node_modules/chai/chai.js",
        "../../node_modules/jquery/dist/jquery.js",
        "../../node_modules/sinon/pkg/sinon.js",
        "calculadora.js",
        "calculadora-client.js",
        "test-*.js"
    ],
    reporters: ['progress'],

    port: 9876,
    colors: true,

    logLevel: config.LOG_INFO,
    autoWatch: true,

    browsers: ['Chrome', 'Firefox', 'PhantomJS'],

    singleRun: false
  });
};
