function timedExec (list) {
  var current = 0;

  return function _temp () {
    list[current][1]();

    if (++current in list)
      setTimeout(_temp, list[current][0]);
  }
}

module.exports = timedExec;
