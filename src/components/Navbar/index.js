import React from 'react';
import {Link} from 'react-router-dom';
import "./index.css";
import {isLoggedIn} from "../../auth";

const NavTabs = props => {
    let authstuff
    if(isLoggedIn()){
        authstuff = (
            <li className="nav-item">
            <Link to="/Logout">Logout</Link>
            </li>   
        )
    }else{
        authstuff=[
            <li className="nav-item">
            <Link to="/Signup">Signup</Link>
            </li>,
            <li className="nav-item">
            <Link to="/Login">Login</Link>
            </li>
        ]
    }
    return (
    <ul className="nav nav-tabs">
    <div className="logo">
    <img src={require("../images/logo.png")}/>
    </div>
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
    {authstuff}
  

    </ul>
    

)}
export default NavTabs;
