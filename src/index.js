import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { AppProvider } from './components/ProductContext';
import { BrowserRouter } from 'react-router-dom';
import {FilterContext} from './components/FilterContext';
import { CartContext } from './components/CartContext';
import { Auth0Provider } from '@auth0/auth0-react';

const domain=process.env.REACT_APP_AUTH_DOMAIN;
const clientId= process.env.REACT_APP_CLIENT_ID;
ReactDOM.render( 

  

    <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <BrowserRouter>
  <AppProvider>
  <FilterContext>
  <CartContext>
  <App/>
  </CartContext>  
  </FilterContext>
  </AppProvider>
  </BrowserRouter>
  </Auth0Provider>
  

  
  
   


,document.getElementById('root'));
