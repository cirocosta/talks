/**
 * @jsx React.DOM
 */

var React = require('react');
var treeData = [
  {
    "name": "Top Level",
    "children": [
      {
        "name": "Level 2: A",
        "children": [
          {
            "name": "Son of A",
          },
          {
            "name": "Daughter of A",
          }
        ]
      },
      {
        "name": "Level 2: B",
      }
    ]
  }
];
var Layout = require('./Layout.jsx');
var Tree = require('./Tree.jsx');
var MARGINS = {
  top: 20, right: 20,
  bottom: 20, left: 20
};
var SIZES = {
  width: 500 - MARGINS.right - MARGINS.left,
  height: 500 - MARGINS.top - MARGINS.bottom
};

var Main = React.createClass({
  render () {
    var {width, height} = Layout.computeSize(SIZES, MARGINS);

    return (
      <Layout margins={MARGINS} sizes={SIZES}>
        <Tree tree={treeData} width={width} height={height} margins={MARGINS} />
      </Layout>
    );
  }
});

module.exports = Main;
