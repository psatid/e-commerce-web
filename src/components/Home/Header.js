import React, { Component } from 'react';
import { Row, Button } from 'react-bootstrap';
import styled from 'styled-components';
import background from '../../img/banner.jpg';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Banner>
                <div className="my-auto ml-4" style={{ maxWidth: '50vw' }}>
                    <WelcomeText>Welcome to Awesome Gadget Store</WelcomeText>
                    <Link to="/productlists">
                        <ButtonContainer>see our products >></ButtonContainer>
                    </Link>
                </div>
            </Banner>
        );
    }
}

const Banner = styled(Row)`
    width: 95vw;
    height: 80vh;
    margin: 2rem auto 2rem auto;
    /* background: linear-gradient(
            rgba(255, 250, 247, 0.6),
            rgba(255, 250, 247, 0.6)
        ),
        url(${background}); */
    background-image: url(${background});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const ButtonContainer = styled(Button)`
    text-transform: capitalize;
    font-weight: bold;
    color: var(--mainBlue);
    background: none;
    border-color: var(--mainBlue);
    transition: all 0.5s linear;
    margin-top: 1rem;
    &:focus {
        background: none;
        box-shadow: none;
        color: var(--mainBlue);
    }
`;

const WelcomeText = styled.h1`
    font-size: 4rem;
    color: #336600;
`;

export default Header;
