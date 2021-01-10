import React from 'react';
import './App.css';
import {Route,Link} from 'react-router-dom';


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
      <switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
        <Route exact path='/shop' component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;