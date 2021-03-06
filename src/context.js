import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: [],
        detailProduct: detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0
    };

    componentDidMount() {
        this.setProducts();
        //this.setOnSaleItem();
    }

    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach((item) => {
            const singleItem = { ...item };
            tempProducts = [...tempProducts, singleItem];
        });

        this.setState(() => {
            return { products: tempProducts };
        });
    };

    // setOnSaleItem = () => {
    //     let tempOnSaleItems = [];
    //     const products = [...storeProducts];
    //     for (var i = 0; i < products.length; i++) {
    //         if (products[i].onSale > 0) {
    //             tempOnSaleItems.push(products[i]);
    //         }
    //     }

    //     this.setState(() => {
    //         return { onSaleItems: tempOnSaleItems };
    //     });
    // };

    getItem = (id) => {
        const product = this.state.products.find((item) => item.id === id);
        return product;
    };

    handleDetail = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { detailProduct: product };
        });
    };

    addToCart = (id) => {
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        product.count = 1;
        let price;

        if (product.onSale > 0) {
            price = this.getSalePrice(product.price, product.onSale);
        } else {
            price = product.price;
        }

        product.total = price;

        this.setState(
            () => {
                return {
                    products: tempProducts,
                    cart: [...this.state.cart, product]
                };
            },
            () => {
                this.addTotal();
            }
        );
    };

    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(() => {
            return { modalProduct: product, modalOpen: true };
        });
    };

    closeModal = () => {
        this.setState(() => {
            return { modalOpen: false };
        });
    };

    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find((item) => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count + 1;
        let price;

        if (product.onSale > 0) {
            price = this.getSalePrice(product.price, product.onSale);
        } else price = product.price;
        product.total = product.count * price;

        this.setState(
            () => {
                return { cart: [...tempCart] };
            },
            () => {
                this.addTotal();
            }
        );
    };

    decrement = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find((item) => item.id === id);

        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];

        product.count = product.count - 1;

        if (product.count === 0) {
            this.removeItem(id);
        } else {
            const price = this.getSalePrice(product.price, product.onSale);
            product.total = product.count * price;

            this.setState(
                () => {
                    return { cart: [...tempCart] };
                },
                () => {
                    this.addTotal();
                }
            );
        }
    };

    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];

        tempCart = tempCart.filter((item) => item.id !== id);

        const index = tempProducts.indexOf(this.getItem(id));
        let removeProduct = tempProducts[index];
        removeProduct.inCart = false;
        removeProduct.count = 0;
        removeProduct.total = 0;

        this.setState(
            () => {
                return {
                    cart: [...tempCart],
                    products: tempProducts
                };
            },
            () => {
                this.addTotal();
            }
        );
    };

    clearCart = () => {
        this.setState(
            () => {
                return { cart: [] };
            },
            () => {
                this.setProducts();
                this.addTotal();
            }
        );
    };

    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map((item) => (subTotal += item.total));
        const tempTax = subTotal * 0.1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax;

        this.setState(() => {
            return {
                cartSubTotal: subTotal,
                cartTax: tax,
                cartTotal: parseFloat(total.toFixed(2))
            };
        });
    };

    getSalePrice = (price, onSale) => {
        const discount = (onSale / 100) * price;
        return price - discount;
    };

    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart,
                    openModal: this.openModal,
                    closeModal: this.closeModal,
                    increment: this.increment,
                    decrement: this.decrement,
                    removeItem: this.removeItem,
                    clearCart: this.clearCart,
                    getSalePrice: this.getSalePrice
                }}
            >
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
