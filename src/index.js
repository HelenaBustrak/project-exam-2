import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import LogIn from "./components/login/LogIn.js";
import SignUp from "./components/sign-up/SignUp";
import Games from "./components/games/Games";
import Cart from "./components/cart/Cart";
import CheckOut from "./components/check-out/CheckOut";
import GameDetailsPage from "./components/games/GameDetailsPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/games" element={<Games />} />
      <Route path="games/detail/:id" element={<GameDetailsPage />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/check-out" element={<CheckOut />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
