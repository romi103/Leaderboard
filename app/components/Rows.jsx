var React = require('react');
var Row = require('Row');

var Rows = React.createClass({

    render: function () {

        let users;
        if(this.props.data) {
            users = this.props.data.map((user,index) => {
                // con
                return (
                    <Row data={user} key={user.username} index={index + 1}/>
                );
            });
        }
        var data  = this.props.data;

        return (
            <tbody>
                {users}
            </tbody>
        );
    }
});

module.exports = Rows; 