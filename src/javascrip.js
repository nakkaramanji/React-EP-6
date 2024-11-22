import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.js";
import Body from "./components/Body.js";

const Style = {
  background: "red",
};

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
console.log(<Applayout />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
