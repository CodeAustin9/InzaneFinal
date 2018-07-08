import React from 'react';
import {Link} from 'react-router-dom';
import "./index.css"


const Footer = props => (
    <ul className="nav nav-tabs">
    <li className="nav-item">
    <Link to="/">Home</Link>
    </li>
    <li className="nav-item">
    <Link to="/Reviews">Reviews</Link>
    </li> 
    <li className="nav-item">
    <Link to="/Gear">Gear</Link>
    </li>
    <li className="nav-item">
    <Link to="/Contact">Contact</Link>
    </li>  
    <li className="nav-item">
    <Link to="/Chat">Chat</Link>
    </li>
  
    </ul>
    

)
export default Footer;