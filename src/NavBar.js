

import React from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom'
import logoImg from './assets/RevelerLogo.png'

import styled from 'styled-components'

const NavBarDiv = styled.div `
    .tsmNavBar {
      z-index: 2;
      color: black;

      img {
        height: 12vw;
      }
    }

    .navBarBrand {
      color: black;
      z-index: 2;
    }

    .tsmNavBarNavMenu {
      position: fixed;
      top: 10px;
      right: 10px;
    }

    .navBarToggler {
    z-index: 2;
    color: white;
    }
`


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
      <NavBarDiv>
        <Navbar light className="tsmNavBar text-white bg-none navbar navbar-expand-lg navbar-light fixed-top" >
        <div className="">
        <NavbarToggler onClick={this.toggleNavbar} className="mr-2 navBarToggler" /> 
        <NavbarBrand href="#page-top" className="mr-auto"><img src={logoImg} alt="" /> </NavbarBrand>
         
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar className="tsmNavBarNavMenu nav justify-content-end" >
              <NavItem>
                <Link to="/">
                   Home  
                </Link>
              </NavItem>
             <NavItem>
                <Link to="/page1">
                    Page 1  
                </Link>
                
              </NavItem>
              <NavItem>
                <Link to="/page2">
                    Page 2  
                </Link>
              </NavItem>
              <NavItem><Link to="/page3">
                    Page 2
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
          </div>
        </Navbar>
      </NavBarDiv>
    );
  }
}