import React from "react";
import Navbar from "./Navbar";

const MainLayout = (props) => {
  const { children } = props;

  return (
    <div>
      <Navbar />
      <div className="content-container">{children}</div>
    </div>
  );
};

export default MainLayout;
