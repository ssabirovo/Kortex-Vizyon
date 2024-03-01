import React from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import Routes from "./routers";

const App: React.FC = () => (
  <div style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}>
    <Navbar />
    <Routes />
    <Footer />
  </div>
);

export default App;
