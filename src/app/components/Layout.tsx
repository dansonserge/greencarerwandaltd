import React from "react";
import TopMenu from "./TopMenu";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="body-font font-roboto">
      <TopMenu />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
