import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/Home/Header';
import FeatureProducts from '../components/Home/FeatureProducts';
import DailyDeals from '../components/Home/DailyDeals';
import Trending from '../components/Home/Trending';
import StoreServices from '../components/Home/StoreServices';

class Home extends Component {
    render() {
        return (
            <Container
                fluid
                style={{
                    background:
                        'linear-gradient(rgba(255, 250, 247, 0.6),rgba(255, 250, 247, 0.6))',
                    width: '100vw'
                }}
            >
                <Header />
                <StoreServices />
                <DailyDeals />
            </Container>
        );
    }
}

export default Home;
