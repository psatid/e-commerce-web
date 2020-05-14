import React, { Component } from 'react';

class CartColumns extends Component {
    render() {
        return (
            <div className='container-fluid text-center d-lg-block mt-3'>
                <div className='row'>
                    <div className="col-10 mx-auto col-lg-2">
                        <p className='text-uppercase'>products</p>
                    </div>
                    
                    <div className="col-10 mx-auto col-lg-2">
                        <p className='text-uppercase'>products name</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className='text-uppercase'>price</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className='text-uppercase'>quantity</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className='text-uppercase'>remove</p>
                    </div>

                    <div className="col-10 mx-auto col-lg-2">
                        <p className='text-uppercase'>total</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartColumns;