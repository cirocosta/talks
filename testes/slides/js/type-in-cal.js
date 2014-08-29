(function () {
  'use strict';

  /**
   * Executes sequence of functions with a given
   * delay for each
   * @param  {Array} list list of lists, [delay,
   * function]
   */
  function timedExec (list) {
    var current = 0;

    return function _temp () {
      list[current][1]();

      if (++current in list)
        setTimeout(_temp, list[current][0]);
    }
  }

  var kbFuncs = [
    [null, function (elem) {
      elem.value += 'L';
    }],
    [1000, function (elem) {
      elem.value += 'E';
    }],
    [400, function (elem) {
      elem.value += 'T';
    }],
    [400, function (elem) {
      elem.value += '\'';
    }],
    [400, function (elem) {
      elem.value += 'S';
    }],
    [400, function (elem) {
      elem.value += ' ';
    }],
    [200, function (elem) {
      elem.value += 'C';
    }],
    [200, function (elem) {
      elem.value += 'O';
    }],
    [200, function (elem) {
      elem.value += 'D';
    }],
    [200, function (elem) {
      elem.value += 'E\n';
    }],
    [150, function (elem) {
      elem.value += '\\';
    }],
    [150, function (elem) {
      elem.value += 'O';
    }],
    [150, function (elem) {
      elem.value += '/';
    }],
    [150, function (elem) {
      elem.value += '\\';
    }],
    [150, function (elem) {
      elem.value += 'O';
    }],
    [150, function (elem) {
      elem.value += '/';
    }],
    [250, function (elem) {
      elem.value += '\\';
    }],
    [250, function (elem) {
      elem.value += 'O';
    }],
    [250, function (elem) {
      elem.value += '/';
    }]
  ];

  /**
   * Whenever we get into this, slide, clean it
   * if there's any value in textArea and then
   * start sending the values.
   */
  Reveal.addEventListener('slide-calc', function (event) {
    var ta = document.querySelector('textarea');

    ta.value = '';

    setTimeout(timedExec(kbFuncs.map(function (arr) {
      return [arr[0], arr[1].bind(null, ta)];
    })), 300);
  });

})();
