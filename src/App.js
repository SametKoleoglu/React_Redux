import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Product from "./pages/Product";
import { Header } from "./components";
import Test from "./pages/Test";

const App = () => {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route index path="/" Component={Product} />
          <Route index path="/test" Component={Test} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
