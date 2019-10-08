import React, { Component } from 'react'
import { Navbar, NavbarBrand, Nav ,Label, NavbarToggler, Input, Button,Modal,ModalHeader,ModalBody, Collapse, NavItem, Jumbotron,Form, FormGroup} from 'reactstrap'
import {NavLink} from 'react-router-dom'


class Header extends Component {

    constructor(props) {
        super(props)
        this.state={
            isNavOpen : false,
            isModalOpen : false
        }
        this.toggleNav = this.toggleNav.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
        
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin(event){
        this.toggleModal()
        alert("Username:"+ this.username.value + " Password:" + this.password.value + " Remember:" + this.remember.checked)
        event.prevenDefault()
    }
    
    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
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
                        <NavbarBrand className='mr-auto' href='/'><img src="/assets/images/logo.png" alt="" width="41" height='30'></img></NavbarBrand>
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
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={this.toggleModal}>
                                    <span className='fa fa-sign-in'>Login</span>
                                </Button>
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
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor='username'>Username</Label>
                                <Input type='text' id='username' name='username' innerRef={(input) => this.username = input}></Input>
                            </FormGroup>
                            <FormGroup  >
                                <Label htmlFor='password'>Password</Label>
                                <Input type='password' id='password' name='password'innerRef={(input) => this.password = input} ></Input>
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type='checkbox' name="remember" innerRef={(input) => this.remember = input} ></Input>
                                    Remember em?
                                </Label>
                            </FormGroup>
                            <Button type='submit' className='bg-primary'>Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>

            </div>
        )
    }
}

export default Header