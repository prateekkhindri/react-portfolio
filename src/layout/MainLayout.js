import React from "react";
import { Footer } from "../components/footer/Footer";
import { TopNav } from "../components/top-nav/TopNav";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <TopNav />
      <div className="main-page">{children}</div>
      <Footer />
    </div>
  );
};
