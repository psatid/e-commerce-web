import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductList from './pages/ProductList';
import Details from './components/Product/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import { Switch, Route } from 'react-router-dom';
import Modal from './components/Modal';
import Home from './pages/Home';
import Footer from './components/Footer';
import Layout from './components/Layout';

var App = () => {
    return (
        <React.Fragment>
            <NavBar />

            <Switch>
                {/* //main page */}
                <Route exact path="/" component={Home} />
                <Route path="/carts" component={Cart} />
                <Route path="/details" component={Details} />
                <Route path="/productlists" component={ProductList} />
                {/* no path match */}
                <Route component={Default} />
            </Switch>

            <Modal />
            <Footer />
        </React.Fragment>
    );
};

export default App;
