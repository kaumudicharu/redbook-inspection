import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import PostItem from './components/post-item/PostItem';
import Post from './components/posts/Post';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Provider } from "react-redux";
import store, { history } from "./store/index";
import { ConnectedRouter } from 'react-router-redux';
const props = {};

const routing =  (
    <Router>
        <Header></Header>
        <div className="home">
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/posts/:id" component={PostItem} />
            </Switch>

        </div>
        <Footer></Footer>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
