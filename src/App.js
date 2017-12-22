import React, { Component } from 'react';
import { Router, Route,Link, hashHistory } from 'react-router';
// import logo from './logo.svg';
// import './App.css';
import Home from './components/home/homeComponent'
import Billboard from './components/billboard/billboardComponent'
// const Home = () => <div><h1>Home</h1></div>;
const About = () => <div><h1>About</h1></div>;
const Contact = () => <div><h1>Contact</h1></div>;

class App extends Component {
  render() {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Home} />
            <Route path="/billboard" component={Billboard} />
            <Route path="/contact" component={Billboard} />
            <Route path="/login" component={Billboard} />
        </Router>
    );
  }
}



export default App;
