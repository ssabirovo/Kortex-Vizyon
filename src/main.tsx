import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/navbar/navbar";
import Main from "./pages/main/main";
import Footer from "./components/footer/footer";
import "./assets/base.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <Main />

    <Footer />
  </React.StrictMode>
);
