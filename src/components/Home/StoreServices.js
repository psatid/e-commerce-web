import React, { Component } from 'react';
import styled from 'styled-components';
import { Row } from 'react-bootstrap';

export default class StoreServices extends Component {
    render() {
        return (
            <Wrapper>
                <Logo>
                    <i class="fas fa-truck"></i>
                    <TextWrapper>free shipping</TextWrapper>
                </Logo>
                <Logo>
                    <i class="fas fa-shield-alt"></i>
                    <TextWrapper>1 year warranty</TextWrapper>
                </Logo>
                <Logo>
                    <i class="far fa-money-bill-alt"></i>
                    <TextWrapper>cash back</TextWrapper>
                </Logo>
                <Logo>
                    <i class="fas fa-headset"></i>
                    <TextWrapper>24hr customer service</TextWrapper>
                </Logo>
            </Wrapper>
        );
    }
}

const Wrapper = styled(Row)`
    width: 95vw;
    margin: 2rem auto 2rem;
    padding-bottom: 3rem;
    padding-top: 1rem;
    justify-content: center;
`;

const Logo = styled.div`
    color: var(--mainBlue);
    font-size: 3rem;
    /* margin-left: 4rem;
    margin-right: 4rem; */
    margin: 2rem 4rem 2rem 4rem;
    text-align: center;
    text-transform: uppercase;
`;

const TextWrapper = styled.div`
    font-size: 1.5rem;
`;
