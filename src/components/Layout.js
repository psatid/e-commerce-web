import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => {
    return (
        <Container fluid>
            <NavBar />
            {children}
            <Footer />
        </Container>
    );
};

export default Layout;
