import React, { Component } from 'react';
import styled from 'styled-components';
class EmptyCart extends Component {
    render() {
        return (
            <div className='container mt-5'>
                <div className='row'>
                    <Text className='col-10 mx-auto my-auto text-center text-title'>
                        your cart is empty
                    </Text>
                </div>
            </div>
        );
    }
}

const Text = styled.div`
    font-size: 3rem;
    align-self: center;
`

export default EmptyCart;
 