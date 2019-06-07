import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav , NavbarToggler, Collapse, NavItem, Jumbotron} from 'reactstrap'
import {NavLink} from 'react-router-dom'


class Header extends Component {

    constructor(props) {
        super(props)
        this.state={
            isNavOpen : false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            isNavOpen : !this.state.isNavOpen
        })
    }
        
    

    render(){
        return (
            <div>
                <Navbar dark expand='md'>
                    <div className='container'>
                    <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className='mr-auto' href='/'><img src="/assests/images/logo.png" alt="" width="41" height='30'></img></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <span className="fa fa-home"> Home</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">
                                    <span className='fa fa-info'> About Us</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/menu">
                                    <span className='fa fa-list'> Menu</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/contactus">
                                    <span className='fa fa-phone'> Contact Us</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                        </Collapse> 
                    </div>
                </Navbar>
                <Jumbotron >
                    <div className="container" >
                        <div className='row row-header'>
                            <h1>Ristorante Con Fusion</h1>
                            <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                        </div>
                    </div>
                </Jumbotron>

            </div>
        )
    }
}

export default Header