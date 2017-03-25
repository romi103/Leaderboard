var React = require('react');
var ReactDOM = require('react-dom');
var { Route, Router, IndexRoute, hashHistory, browserHistory } = require('react-router');
var Main = require('Main');


// Load foundation

$(document).foundation();

// app css
require('style!css!sass!applicationStyles');


ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Main} />
    </Router>,
    document.getElementById("app")
    );
    