import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import LogoIcon from "../../assets/img/logo.svg";

import CloseIcon from "../../assets/img/close.svg";

import BarsIcon from "../../assets/img/bars-solid.svg";

export default function Header({ history }) {
  const location = useLocation().pathname;

  const [dropdownMenu, setdropdownMenu] = useState(false);

  return (
    <React.Fragment>
      <nav>
        <Link to="/">
          <div className="logo">
            <img src={LogoIcon} alt="Logo Icon" />
            HomeRent
          </div>
        </Link>

        <ul>
          <li>
            <Link to="/" className={location === "/" ? "current-page" : ""}>
              Buy
            </Link>
          </li>
          <li>
            <Link to="/">Rent</Link>
          </li>
          <li>
            <Link to="/">Sell</Link>
          </li>
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/">Help</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>

        <div
          className="dropdown-button"
          onClick={() => {
            setdropdownMenu(true);
          }}
        >
          <img src={BarsIcon} alt="Dropdown Icon" />
        </div>
      </nav>

      <ul className={`dropdown-menu ${dropdownMenu ? "show" : ""}`}>
        <li
          className="close"
          onClick={() => {
            setdropdownMenu(false);
          }}
        >
          <img src={CloseIcon} alt="Close Icon" />
        </li>

        <li>
          <Link to="/" className={location === "/" ? "current-page" : ""}>
            Buy
          </Link>
        </li>
        <li>
          <Link to="/">Rent</Link>
        </li>
        <li>
          <Link to="/">Sell</Link>
        </li>
        <li>
          <Link to="/">Blog</Link>
        </li>
        <li>
          <Link to="/">Help</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </React.Fragment>
  );
}
