import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import './style.scss'

const Layout = ({ children }) => {
  return (
    <section className="wrapper">
      <Header />
        <section >{children}</section>
      <Footer />
    </section>
  );
};

export default Layout;
