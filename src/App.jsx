import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Signup from "./components/singup/Signup";
import ForRent from "./components/forRent/ForRent";
import ForSale from "./components/forSale/ForSale";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ForRent />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="forSale" element={<ForSale />} />
    </Routes>
  );
}

export default App;
