import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { ButtonContainer } from '../Button';
import { ProductConsumer } from '../../context';

class DealsProduct extends Component {
    render() {
        const { id, title, img, price, inCart, onSale } = this.props.product;
        return (
            <ProductConsumer>
                {(value) => (
                    <Wrapper>
                        <SaleTag className="text-center">{onSale}% off</SaleTag>
                        <Card.Img src={img} variant="top" />
                        <Card.Body className="text-center">
                            <Card.Title style={{ height: '3rem' }}>
                                {title}
                            </Card.Title>
                            <div className="mb-2">
                                <del
                                    style={{
                                        color: 'grey'
                                    }}
                                >
                                    ${price}
                                </del>
                                &ensp;${value.getSalePrice(price, onSale)}
                            </div>
                            <ButtonContainer
                                disabled={inCart ? true : false}
                                onClick={() => {
                                    value.addToCart(id);
                                }}
                            >
                                {inCart ? (
                                    <span>in cart</span>
                                ) : (
                                    <span>add to cart</span>
                                )}
                            </ButtonContainer>
                        </Card.Body>
                    </Wrapper>
                )}
            </ProductConsumer>
        );
    }
}

DealsProduct.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number,
        img: PropTypes.string,
        title: PropTypes.string,
        price: PropTypes.number,
        inCart: PropTypes.bool,
        onSlae: PropTypes.number
    })
};

const Wrapper = styled(Card)`
    width: 14rem;
    margin: 1rem 2rem 2rem 2rem;
    padding: 5px;
    justify-content: center;
`;

const SaleTag = styled.div`
    margin-top: 0.5rem;
    margin-left: 0.25rem;
    height: 1.5rem;
    width: 4rem;
    padding: 2px;
    font-size: 0.75rem;
    border-radius: 2rem;
    text-transform: uppercase;
    background-color: var(--mainYellow);
`;

export default DealsProduct;
