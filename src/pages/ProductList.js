import React, { Component } from 'react';
import Title from '../components/Title';
import Product from '../components/Product//Product';
import { storeProducts } from '../data';
import { ProductConsumer } from '../context';

class ProductList extends Component {
    state = {
        products: storeProducts
    };
    render() {
        // console.log("Products: " + this.state.products)
        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title title="our products"></Title>
                        <div className="row">
                            <ProductConsumer>
                                {(value) => {
                                    return value.products.map((product) => {
                                        return (
                                            <Product
                                                key={product.id}
                                                product={product}
                                            ></Product>
                                        );
                                    });
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ProductList;
