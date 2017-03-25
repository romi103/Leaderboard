var React = require('react');
var Header = require('Header');
var Rows = require('Rows');
var axios = require('axios');

var Main = React.createClass({

    getInitialState: function (){
        return {
            showUser: "recent",
            data: []
        };
    },

    fetchUsers: function (state) {
        var linkBase = "https://fcctop100.herokuapp.com/api/fccusers/top/";
        var linkFull= "";
        // var recent = "https://fcctop100.herokuapp.com/api/fccusers/top/recent";
        // var all = "https://fcctop100.herokuapp.com/api/fccusers/top/alltime";
        var that = this;

        if(state === "recent") {
            linkFull = linkBase + "recent";
        } else if (state === "alltime") {
            linkFull = linkBase + "alltime";
        }

        return axios.get(linkFull).then(function (res) {
            that.setState({data: res.data})

        }, function (res) {
            throw new Error("Something went wrong!");
        });
    },

    handleHeaderClick: function (state) {
        this.setState({
            showUser: state
        });
    },

    componentDidUpdate: function (prevProps, prevState) {
        if (this.state.showUser !== prevState.showUser) {
            this.fetchUsers(this.state.showUser);
        }
    },

    componentDidMount: function () {
        var showUser = this.state.showUser;
        this.fetchUsers(showUser);
    },

    render: function () {
        var {showUser, data} = this.state;
        return (
            <div>
                <table>
                    <Header state={showUser} onHeaderClick={this.handleHeaderClick}/>
                    <Rows data={data}/>
                </table>
            </div>
        );
    }
});

module.exports = Main;