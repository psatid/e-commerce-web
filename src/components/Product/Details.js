import React, { Component } from 'react';
import { ProductConsumer } from '../../context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from '../Button';

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                    // console.log(value.detailProduct)
                    const {
                        id,
                        info,
                        company,
                        img,
                        price,
                        title,
                        inCart,
                        onSale
                    } = value.detailProduct;
                    return (
                        <div className="container py-5">
                            {/* title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue">
                                    <h1>{title}</h1>
                                </div>
                            </div>

                            {/* product info */}
                            <div className="row">
                                {/* frist col */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img
                                        src={img}
                                        className="img-fluid ml-5"
                                        alt="product"
                                    ></img>
                                </div>

                                {/* second col */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h2>model: {title}</h2>

                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        made by:{' '}
                                        <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>

                                    <h4 className="text-blue">
                                        <strong>
                                            price:{' '}
                                            {onSale > 0 ? (
                                                <>
                                                    <del
                                                        style={{
                                                            color: 'grey'
                                                        }}
                                                    >
                                                        ${price}
                                                    </del>
                                                    <span>
                                                        &ensp;$
                                                        {value.getSalePrice(
                                                            price,
                                                            onSale
                                                        )}
                                                    </span>
                                                </>
                                            ) : (
                                                <span>${price}</span>
                                            )}
                                        </strong>
                                    </h4>

                                    <h4 className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Product's Info:
                                    </h4>

                                    <p className="text-muted lead">{info}</p>

                                    <div>
                                        <Link to="/productlists">
                                            <ButtonContainer>
                                                back to products
                                            </ButtonContainer>
                                        </Link>
                                        <ButtonContainer
                                            cart
                                            disabled={inCart ? true : false}
                                            onClick={() => {
                                                value.addToCart(id);
                                                value.openModal(id);
                                            }}
                                        >
                                            {inCart ? 'in cart' : 'add to cart'}
                                        </ButtonContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                }}
            </ProductConsumer>
        );
    }
}

export default Details;
