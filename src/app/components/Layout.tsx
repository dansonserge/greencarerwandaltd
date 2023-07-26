import React from "react";
import TopMenu from "./TopMenu";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <TopMenu />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
