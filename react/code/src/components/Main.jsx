/**
 * @jsx React.DOM
 */

var React = require('react');
var treeData = [
  {
    "name": "Top Level",
    "id": "l1",
    "children": [
      {
        "name": "Level 2: A",
        "id": "l2-a",
        "active": true,
        "children": [
          {
            "name": "Son of A",
            "id": "l3-l2-a-a"
          },
          {
            "name": "Daughter of A",
            "id": "l3-l2-a-b"
          }
        ]
      },
      {
        "name": "Level 2: B",
        "id": "l2-b"
      }
    ]
  }
];
var Layout = require('./Layout.jsx');
var Tree = require('./Tree.jsx');
var Slider = require('./Slider.jsx');
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
      <main>
        <Layout margins={MARGINS} sizes={SIZES}>
          <Tree tree={treeData} width={width} height={height} margins={MARGINS} />
        </Layout>
        <Slider min={1} max={4} step={1} />
      </main>
    );
  }
});

module.exports = Main;
