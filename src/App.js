import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavTabs from "./components/Navbar";
import Home from "./components/pages/Home";
import Environmental from "./components/pages/Environmental";
import Account from "./components/pages/Account";
import Locations from "./components/pages/Locations";
import Products from "./components/pages/Products";
import Login from "./components/pages/Login";
import Cart from "./components/pages/Cart";
// import Footer from "./components/Footer/index.js";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        
        <NavTabs/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Environmental" component={Environmental}/>
        <Route exact path="/Account" component={Account}/>
        <Route exact path="/Locations" component={Locations}/>
        <Route exact path="/Products" component={Products}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/cart" component={Cart}/>
       {/* <Footer /> */}
      </div>
    </Router>
      );
  }
}

export default App;
