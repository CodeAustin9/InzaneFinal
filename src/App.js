import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import NavTabs from "./components/Navbar";
import Home from "./components/pages/Home";
import Environmental from "./components/pages/Environmental";
import Signup from "./components/pages/Signup";
import Locations from "./components/pages/Locations";
import Products from "./components/pages/Products";
import Login from "./components/pages/Login";
import Cart from "./components/pages/Cart";
import Logout from "./components/pages/Logout";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <Router>
      <div>
        
        <NavTabs/>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Environmental" component={Environmental}/>
        <Route exact path="/Signup" component={Signup}/>
        <Route exact path="/Locations" component={Locations}/>
        <Route exact path="/Products" component={Products}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/Logout" component={Logout}/>
        <footer>
       <Footer />
       </footer>
      </div>
    </Router>
      );
  }
}

export default App;
