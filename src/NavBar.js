

import React from 'react';
import { NavLink, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom'
import logoImg from './assets/RevelerLogo.png'


export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar light className="tsmNavBar text-white bg-none navbar navbar-expand-lg navbar-light fixed-top" >
        <div className="">
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2 navBarToggler" /> 
        <NavbarBrand href="#page-top" className="mr-auto"><img src={logoImg} alt="" /> </NavbarBrand>
         
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="tsmNavBarNavMenu nav justify-content-end" >
              <NavItem>
                <NavLink>
                <Link to="/page1">
                   Home  
                </Link>
                </NavLink>
              </NavItem>
             <NavItem>
                <NavLink><Link to="/page2">
                    Page 1  
                </Link>
                </NavLink>
              </NavItem>
              <NavItem>
              <NavLink><Link to="/page3">
                    Page 2
                </Link>
                </NavLink>
                
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}