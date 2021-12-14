import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Home from './pages/Home'
import Products from './pages/Products'
import Item from './pages/Item.js'
import About from './pages/About'
import Contact from './pages/Contact'

import {BrowserRouter, Routes, Route} from 'react-router-dom'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}> 
            <Route index element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/product/:id' element={<Item />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact/>} />
        </Route>

      </Routes>

    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

