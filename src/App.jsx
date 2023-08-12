// import { useState } from 'react'
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
// import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/Footer/Footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";


function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
