import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Footer } from "../components/footer/Footer";
import { Hero } from "../components/hero/Hero";
import { TopNav } from "../components/top-nav/TopNav";

export const HomePage = () => {
  return (
    <div id="top-nav" className="top-nav">
      <TopNav />

      <Hero />

      <Footer />
    </div>
  );
};
