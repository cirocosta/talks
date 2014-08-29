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

  /**
   * Simulates a click. This is necessary
   * because .click() won't active ':active'
   * selector as we expect (although the Active
   * event might get fired).
   */
  function simulateClick (button, klass) {
    var origClass = button.getAttribute('class');

    button.setAttribute('class', origClass + ' ' + klass);

    setTimeout(function () {
      button.setAttribute('class', origClass);
    }, 100);
  }

  var buttonMap =
    Array.prototype.slice.call(document.querySelectorAll('.keypad button'))
      .reduce(function (mapping, elem) {
        mapping[elem.innerHTML] = elem;

        return mapping;
      }, {});

  var kbFuncs = [
    [null, function (tela) {
      simulateClick(buttonMap['9'], 'clicado');
      tela.value += '9';
    }],
    [400, function (tela) {
      simulateClick(buttonMap['*'], 'clicado');
      tela.value += '*';
    }],
    [400, function (tela) {
      simulateClick(buttonMap['8'], 'clicado');
      tela.value += '8';
    }],
    [400, function (tela) {
      simulateClick(buttonMap['='], 'clicado');
      tela.value += '=\n';
    }],
    [300, function (tela) {
      tela.value += '72';
    }],
    [3000, function (tela) {
      simulateClick(buttonMap['ON'], 'clicado');
      tela.value = '';
    }],
    [400, function (tela) {
      tela.value += 'L';
    }],
    [600, function (tela) {
      tela.value += 'E';
    }],
    [400, function (tela) {
      tela.value += 'T';
    }],
    [400, function (tela) {
      tela.value += '\'';
    }],
    [400, function (tela) {
      tela.value += 'S';
    }],
    [400, function (tela) {
      tela.value += ' ';
    }],
    [200, function (tela) {
      tela.value += 'C';
    }],
    [200, function (tela) {
      tela.value += 'O';
    }],
    [200, function (tela) {
      tela.value += 'D';
    }],
    [200, function (tela) {
      tela.value += 'E\n';
    }],
    [150, function (tela) {
      tela.value += '\\';
    }],
    [150, function (tela) {
      tela.value += 'O';
    }],
    [150, function (tela) {
      tela.value += '/';
    }],
    [150, function (tela) {
      tela.value += '\\';
    }],
    [150, function (tela) {
      tela.value += 'O';
    }],
    [150, function (tela) {
      tela.value += '/';
    }],
    [250, function (tela) {
      tela.value += '\\';
    }],
    [250, function (tela) {
      tela.value += 'O';
    }],
    [250, function (tela) {
      tela.value += '/';
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
    })), 1000);
  });

})();
