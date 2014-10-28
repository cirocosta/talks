/**
 * @jsx React.DOM
 */

require('./Node.scss');
var React = require('react');

var Node = React.createClass({
  props: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    r: React.PropTypes.number.isRequired,
  },

  render () {
    var translate = 'translate(' + this.props.x + ',' +
                                   this.props.y + ')';

    return (
      <g className={'Node'} transform={translate}>
        <circle r={this.props.r} />
        <text style={{fillOpacity: '1'}}>{this.props.name}</text>
      </g>
    );
  }
});

module.exports = Node;
