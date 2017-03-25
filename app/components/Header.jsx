var React = require('react');
// var caretDown = require('react-icons/lib/fa/caret-down.js');
// import FaAngleDown from 'react-icons/lib/fa'

var Header = React.createClass({

    onHeaderClick: function (state) {
        
        return (() => {
            this.props.onHeaderClick(state);
        });
    },

    render: function () {
    var {state} = this.props;
        return (
            <thead>
                <tr>
                    <th colSpan="4" className="tabel-title"><h3>Leaderboard</h3></th>
                </tr>
                <tr>
                    <th>#</th>
                    <th>Camper Name </th>
                    <th className="heading-sort" onClick={this.onHeaderClick("recent")}>{state === "recent" ? <Icon/> : ""} Points in past 30 days</th>
                    <th className="heading-sort" onClick={this.onHeaderClick("alltime")}>{state === "alltime" ? <Icon /> : ""} All time points</th>
                </tr>
                
            </thead>
        );
    }
});

var Icon = React.createClass({
    render: function () {
        return (
            <svg height="8" width="8" viewBox="0 0 8 8">
                <polygon points="0,0 8,0 4,8" />
            </svg>
        );
    }
});

module.exports = Header; 