import React from 'react';

function CartItem({ item, value }) {
    const { id, title, img, total, count, price, onSale } = item;
    const { increment, decrement, removeItem, getSalePrice } = value;
    const salePrice = getSalePrice(price, onSale);
    return (
        <div className="row my-3 text-capitalize text-center">
            <div className="col-10 mx-auto col-lg-2">
                <img
                    src={img}
                    style={{ width: '5rem', height: '5rem' }}
                    className="img-fluid"
                    alt="product"
                />
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product: </span>
                {title}
            </div>

            <div className="col-10 mx-auto col-lg-2">
                {salePrice > 0 ? <p>${salePrice}</p> : <p>${price}</p>}
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <div className="d-flex justify-content-center">
                    <span
                        className="btn btn-black mx-1"
                        onClick={() => {
                            decrement(id);
                        }}
                    >
                        -
                    </span>

                    <span className="btn btn-black mx-1">{count}</span>

                    <span
                        className="btn btn-black mx-1"
                        onClick={() => {
                            increment(id);
                        }}
                    >
                        +
                    </span>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <div
                    className="cart-icon"
                    onClick={() => {
                        removeItem(id);
                    }}
                >
                    <i className="fas fa-trash"></i>
                </div>
            </div>

            <div className="col-10 mx-auto col-lg-2">
                <strong>item total: ${total}</strong>
            </div>
        </div>
    );
}

export default CartItem;
