import React from "react";
import Headers from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experince from "./components/experince/Experince";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Headers />
      <Nav />
      <About />
      <Experince />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
