import React from 'react';
import {Link} from 'react-router-dom';
import "./index.css";


const NavTabs = props => (
    <ul className="nav nav-tabs">
    <li><img src={require("../images/logo.png")}/></li>
    <li className="nav-item">
    <Link to="/">Home</Link>
    </li>
    <li className="nav-item">
    <Link to="/Environmental">Environmental</Link>
    </li> 
    <li className="nav-item">
    <Link to="/Locations">Locations</Link>
    </li>
    <li className="nav-item">
    <Link to="/Products">Products</Link>
    </li>  
    <li className="nav-item">
    <Link to="/cart">Cart</Link>
    </li>
    <li className="nav-item">
    <Link to="/Account">Account</Link>
    </li>
    <li className="nav-item">
    <Link to="/Login">Login</Link>
    </li>

    </ul>
    

)
export default NavTabs;
