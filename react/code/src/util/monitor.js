function monitor (arguments) {
  console.log(this);
}


function caller (fun) {
  monitor(this.callee, arguments);

  fun(2,3);
}

function add (a, b) {
  add.caller

  return a + b;
}

caller(add);
