import React from "react";
import TopMenu from "./TopMenu";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="body-font font-roboto flex flex-col min-h-screen">
      <TopMenu />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
