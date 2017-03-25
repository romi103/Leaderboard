var React = require('react');

var Row = React.createClass({
    render: function () {
        return (
            <tr>
                <td>{this.props.index}</td>
                <td><img className="row-img" src={this.props.data.img} /> {this.props.data.username}</td>
                <td>{this.props.data.recent}</td>
                <td>{this.props.data.alltime}</td>
            </tr>
        );
    }
});


module.exports = Row;
