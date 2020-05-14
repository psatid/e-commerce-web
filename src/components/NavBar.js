import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { ButtonContainer } from './Button';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
// import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
// import { ProductConsumer } from '../context';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
// import Button from 'react-bootstrap/Button';

class NavBar extends Component {
    state = {
        toggleIsOpen: false
    }

    handleToggle = () => {
        this.setState({ toggleIsOpen: !this.state.toggleIsOpen });
    }
    render() {
        return (
            <NavbarWrapper expand="lg" expanded={this.state.toggleIsOpen}>
                <Navbar.Brand>
                    <NavLinkLogo to='/productlists' className="ml-2">
                        <i className="fas fa-dragon"></i>
                    </NavLinkLogo>
                </Navbar.Brand>

                <NavbarToggle onClick={() => { this.handleToggle() }}>
                    {this.state.toggleIsOpen ? (
                        <i class="fas fa-times"></i>
                    ) : (
                            <i className="fas fa-align-justify"></i>
                        )}

                </NavbarToggle>

                <Navbar.Collapse className="ml-2 justify-content-center">
                    <Nav className="mr-auto">
                        <NavLinkMenu to="/productlists"
                            onClick={() => { this.handleToggle() }}
                        >Products
                        </NavLinkMenu>
                    </Nav>

                    <Nav className="ml-auto">
                        <Nav.Item className="mb-2">
                            {/* <PopUpHover content='Cart' trigger={<NavLink className="fas fa-shopping-basket"/>} /> */}
                            <NavLink to="/carts" onClick={() => { this.handleToggle() }}>
                                <i className="fas fa-user-plus mr-2"></i>
                                cart
                            </NavLink>
                        </Nav.Item>

                        <Nav.Item className="mb-2">
                            <NavLink to="" onClick={() => { this.handleToggle() }}>
                                <i className="fas fa-user-plus mr-2"></i>
                                Register
                            </NavLink>
                        </Nav.Item>

                        <Nav.Item className="mb-2">
                            <NavLink to="" onClick={() => { this.handleToggle() }}>
                                <i className="fas fa-sign-in-alt mr-2"></i>
                                log in
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </NavbarWrapper>

            // <ProductConsumer>
            //     {() => (
            //         <NavbarWrapper expand="md">
            //             <Nav className="mr-auto">
            //                 <CardLogo className="ml-3">
            //                     <NavLinkLogo to='/productlists'>
            //                         <i className="fas fa-dragon"></i>
            //                     </NavLinkLogo>
            //                 </CardLogo>

            //                 <Nav.Item className="ml-3 mt-3">
            //                     <NavLinkMenu to="/productlists" className="mr-auto">
            //                         Products
            //                     </NavLinkMenu>
            //                 </Nav.Item>
            //             </Nav>


            //             <Nav className="ml-auto">
            //                 <Nav.Item>
            //                     {/* <PopUpHover content='Cart' trigger={<NavLink className="fas fa-shopping-basket"/>} /> */}
            //                     <NavLink to="/carts" className="fas fa-shopping-basket"></NavLink>
            //                 </Nav.Item>

            //                 <Nav.Item>
            //                     <ButtonContainer userLogin>
            //                         <i className="fas fa-sign-in-alt mr-2"></i>
            //                             log in
            //                     </ButtonContainer>
            //                 </Nav.Item>

            //                 <Nav.Item>
            //                     <ButtonContainer userLogin>
            //                         <i className="fas fa-user-plus mr-2"></i>
            //                              Register
            //                     </ButtonContainer>
            //                 </Nav.Item>
            //             </Nav>
            //         </NavbarWrapper>
            //     )
            //     }
            // </ProductConsumer>
        );
    }
}

const NavbarWrapper = styled(Navbar)`
    background: var(--mainBlue);
`

const NavLink = styled(Link)`
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    transition: all 0.5s linear;
    margin-right: 1rem;
    margin-top: 0.5rem;

    /* &:hover{
        color: var(--lightBlue) !important;
    } */
`

const NavLinkLogo = styled(Link)`
    color: var(--mainWhite) !important;
    font-size: 2rem;
    border-width: thick !important;
`

// const CardLogo = styled(Card)`
//     border-radius: 1rem;
//     border: 0.1rem solid var(--lightBlue);
//     background: transparent;
//     padding: 0.5rem 0.8rem;
// `

const NavLinkMenu = styled(Link)`
    font-size: 1.5rem;
    color: var(--mainWhite) !important;
`

const NavbarToggle = styled(Navbar.Toggle)`
    color: var(--mainWhite) !important;
    border: none;
    transition: all 1s linear;
    font-size: 1.5rem;
`

// const PopUpHover = styled(Popup)`
//     color: #FFFFFF !important;
//     background: #777777;
//     /* border-radius: 0.25rem; */
//     font-size: 0.7rem;
//     padding: 0.2rem 1rem;
//     font-family: "Courier New";
// `

export default NavBar;