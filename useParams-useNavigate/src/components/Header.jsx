import React from "react";
import "../assets/css/Header.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="logo">LOGO</div>
      <ul>
        <li>
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Products
          </button>
        </li>
      </ul>
    </header>
  );
}

export default Header;
