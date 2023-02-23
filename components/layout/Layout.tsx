import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

type LayoutProps = {
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
