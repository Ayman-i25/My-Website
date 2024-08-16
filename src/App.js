import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import WebSite from './pages/WebSite/WebSite';
import Footer from './components/Footer/Footer';
import WebDetails from './pages/WebDetails/WebDetails';
import {  useRef, } from 'react';
import React from 'react'
import DesignPage from './pages/designPage/DesignPage';

function App() {

  const scrollRef = useRef(null)

  return (
    <div className="App">
      <div id='main-container' ref={scrollRef} >
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/websites' element={<WebSite />} />
          <Route path='/websites/:id' element={<WebDetails />} />
          <Route path='/designpage' element={<DesignPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
