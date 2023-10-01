import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap'
import Menu from './components/MenuComponent';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
            <Menu/>
          </div>
        </Navbar>
      </div>
    );
  }
}


export default App;
