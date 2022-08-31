import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Products from "../components/Products";
import Services from "../components/Services";
import Payment from "../components/Payment";
import Footer from "../components/Footer";
import Clientes from "../components/Clientes";
import Carrossel from "../components/Carrossel";

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Carrossel/>
      <Products />
      <Services />
      <Payment />
      <Clientes/>
      <Footer />
    </>
  );
};

export default MainPage;
