var assign = require('object-assign');

function Queue () {
  this.arr = [];
}

assign(Queue.prototype, {
  enqueue: function (d) {return this.arr.push(d) },
  dequeue: function () {return this.arr.pop() },
  isEmpty: function () {return !this.arr.length }
});

function bfs (tree, id) {
  var Q = new Queue();
  var t;

  Q.enqueue(tree);

  while (!Q.isEmpty()) {
    t = Q.dequeue();

    if (t.id === id)
      return t;

    for (var child in t.children)
      Q.enqueue(t.children[child]);
  }
}

module.exports = bfs;
