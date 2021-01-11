import React from 'react';
import './App.css';
import {Route,Switch} from 'react-router-dom';

import Header from "./components/header/header.component";


import ShopPage from './pages/shop/shop.component.jsx'
import Homepage from './pages/homepage/home-page.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
        <Route exact path='/shop' component={ShopPage} />
      </Switch>
   

    </div>
  );
}

export default App;