import React, { Suspense } from "react";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import Routes from "./routers";
import Loading from "./components/suspense/suspense";

const App: React.FC = () => (
  <Suspense fallback={<Loading />}>
    <div
      style={{ display: "flex", minHeight: "100vh", flexDirection: "column" }}
    >
      <Navbar />
      <Routes />
      <Footer />
    </div>
  </Suspense>
);

export default App;
