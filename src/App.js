import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import { Switch, Route } from 'react-router-dom';
import Modal from './components/Modal';

var App = () => {
  return (
    <React.Fragment>
      <NavBar />

      <Switch>
        {/* //main page */}
        <Route exact path="/" component={ProductList} />
        <Route path="/carts" component={Cart} />
        <Route path="/details" component={Details} />
        <Route path="/productlists" component={ProductList} />
        {/* no path match */}
        <Route component={Default} />
      </Switch>

      <Modal />
    </React.Fragment>
  );
}

export default App;
