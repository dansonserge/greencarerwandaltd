import React, { useEffect, useState } from "react";
import TopMenu from "./TopMenu";
import Footer from "./Footer";
import { UserResponse } from "./interfaces/UserInterface";
import { Toaster } from "react-hot-toast";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [userDetails, setUserDetails] = useState<UserResponse | undefined>();
  useEffect(() => {
    const storedUserDetails = localStorage.getItem("user-details");
    if (storedUserDetails) {
      setUserDetails(JSON.parse(storedUserDetails));
    }
  }, []);
  return (
    <div className="body-font font-roboto flex flex-col min-h-screen">
      <TopMenu />
      <Toaster />
      <div className="flex-grow">{children}</div>
      <Footer userDetails={userDetails} />
    </div>
  );
};

export default Layout;
