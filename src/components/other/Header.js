import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import LogoIcon from "../../assets/img/logo.svg";

import BarsIcon from "../../assets/img/bars-solid.svg";

export default function Header({ history }) {
  const location = useLocation().pathname;

  return (
    <nav>
      <div className="logo">
        <img src={LogoIcon} alt="Logo Icon" />
        HomeRent
      </div>

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

      <div className="dropdown-button">
        <img src={BarsIcon} alt="Dropdown Icon" />
      </div>

      <div className="bc"></div>

      <ul className="dropdown-menu">
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
    </nav>
  );
}
