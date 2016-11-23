import React, { Component } from 'react';
import { Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div id="app">
        <header>header</header>
        <div id="main">
          <ul id="sidebar">
             <li><Link to="/about">About</Link></li>
             <li><Link to="/job">Job</Link></li>
          </ul>
          <div id="stage">{this.props.children}</div>
        </div>
        <footer>footer</footer>
      </div>
    );
  }
}

export default App;
