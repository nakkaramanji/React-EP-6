import { LOGO_URL } from "../utils/contants";
import { useState } from "react";
export function Header() {
  const [color, setColor] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });
  const Updatecolor = function () {
    setColor((p) => {
      return { ...p, brand: "nakka" };
    });
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>{color.brand}</li>
          <li>About us</li>
          <li>Contact</li>
          <li>cart</li>
        </ul>
        <button onClick={Updatecolor}>click me for updates</button>
      </div>
    </div>
  );
}
