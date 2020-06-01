import React, { Component } from 'react';
import styled from 'styled-components';
import { Row, Container } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <FooterWrapper fluid>
                <Row className="justify-content-center">
                    <div className="mt-4">Built With React</div>
                </Row>

                <Row className="justify-content-center">
                    <div>© 2020 Satid Tachatanitanont. All Rights Reserved</div>
                </Row>
            </FooterWrapper>
        );
    }
}

const FooterWrapper = styled(Container)`
    width: 100vw;
    height: 7rem;
    background-color: var(--mainBlue);
    color: white;
`;
