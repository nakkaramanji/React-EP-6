import { LOGO_URL } from "../utils/contants";
import { useState } from "react";

export function Header() {
  let [btnbutton, setbutton] = useState("Logout");
  const [color, setColor] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });
  const Updatecolor = function () {
    setColor((p) => {
      console.log(p);
      return { ...p, color: "nakka" };
    });
  };
  const btn = function () {
    document.getElementById("ma").innerHTML = btnbutton;
    btnbutton = btnbutton === "Login" ? "Logout" : "Login";
  };
  console.log("header");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>{color.color}</li>
          <li>About us</li>
          <li>Contact</li>
          <li>cart</li>
        </ul>
        {/* <button onClick={Updatecolor}>click me for updates</button> */}
        <button
          className="login"
          id="ma"
          onClick={() => {
            btnbutton === "Login" ? setbutton("Logout") : setbutton("Login");
            // document.getElementById("ma").innerHTML = btnbutton;
          }}
        >
          {btnbutton}
        </button>
        <button onClick={btn}> normal</button>
      </div>
    </div>
  );
}
