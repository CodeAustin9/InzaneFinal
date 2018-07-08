import React from 'react';
import {Link} from 'react-router-dom';
import "./index.css"


const NavTabs = props => (
    <ul className="nav nav-tabs">
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
    <Link to="/Login">Login</Link>
    </li>
    <li className="nav-item">
    <Link to="/Account">Account</Link>
    </li>
    </ul>
    

)
export default NavTabs;
// import React from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem } from 'reactstrap';

// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand href="/">reactstrap</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="ml-auto" navbar>
//               <NavItem>
//                 <NavLink href="/components/">Components</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//               </NavItem>
//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   Account
//                 </DropdownToggle>
//                 <DropdownMenu right>
//                   <DropdownItem>
//                     Edit Profile
//                   </DropdownItem>
//                   <DropdownItem>
//                     My Account
//                   </DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem>
//                     Signout
//                   </DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }
