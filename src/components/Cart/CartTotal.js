import React from 'react';
import { Link } from 'react-router-dom';

function CartTotal({ value }) {
    const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-xapitalize text-right'>
                        <Link to='/'>
                            <button className='btn btn-outline-danger text-uppercase mb-3 px-5'
                                type='button'
                                onClick={() => {
                                    clearCart()
                                }}>
                                clear cart
                            </button>
                        </Link>
                        <h5 className='text-title'>
                            subtotal: ${cartSubTotal}
                        </h5>
                        <h5 className='text-title'>
                            Tax: ${cartTax}
                        </h5>
                        <h5 className='text-title'>
                            total: ${cartTotal}
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default CartTotal;