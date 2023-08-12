import React from 'react';
import { BrowserRouter } from "react-router-dom";
import './App.css';
import Footer from "./Component/apps/Footer";
import Header from "./Component/apps/Header";
import Main from "./Component/apps/Main";



function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
