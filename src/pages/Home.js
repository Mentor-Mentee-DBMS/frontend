import { Footer, Navbar, Sidebar } from "../components";

import { HomePage } from "../components";
import React from "react";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <HomePage />
      <Footer />
    </main>
  );
};

export default Home;
