// import { useState } from 'react'
import React from 'react';
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header/Header';
import PortfolioContainer from './components/PortfolioContainer';
import Footer from './components/Footer/Footer';
import { useState } from "react";

const App = () => {
  const [currentPage, setCurrentPage] = useState("About");
  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <PortfolioContainer
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <Footer />
    </div>
  );
};

export default App;
