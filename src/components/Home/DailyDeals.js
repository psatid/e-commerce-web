import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { storeProducts } from '../../data';
import DealsProduct from '../Container/DealsProduct';
import { ProductConsumer } from '../../context';

class DailyDeals extends Component {
    render() {
        return (
            <Container
                style={{
                    background: 'white',
                    maxWidth: '95vw',
                    padding: '0rem'
                }}
            >
                <Wrapper>
                    <div>
                        <h1
                            className="mb-3 ml-4 text-capitalize"
                            style={{ color: 'var(--mainBlue' }}
                        >
                            daily deals
                        </h1>
                        <Underline />
                        <Row
                            style={{
                                justifyContent: 'center',
                                marginTop: '3rem'
                            }}
                        >
                            <ProductConsumer>
                                {(value) => {
                                    // console.log(value.onSaleItems);
                                    return value.products.map((product) => {
                                        if (product.onSale > 0) {
                                            return (
                                                <DealsProduct
                                                    key={product.id}
                                                    product={product}
                                                ></DealsProduct>
                                            );
                                        }
                                    });
                                }}
                            </ProductConsumer>
                        </Row>
                    </div>
                </Wrapper>
            </Container>
        );
    }
}

export default DailyDeals;

const Wrapper = styled(Row)`
    width: 95vw;
    margin: 2rem auto 2rem;
    padding-bottom: 3rem;
    padding-top: 1rem;
`;

const Underline = styled.div`
    width: 95vw;
    height: 0.15rem;
    background: #a9a9a9;
`;
