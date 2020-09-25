import React, { useContext } from "react";

import { Context } from "../Context";

import SortTopToBottomIcon from "../../assets/img/sort-amount-down-alt-solid.svg";
// import SortBottomToTopIcon from "../../assets/img/sort-amount-up-alt-solid.svg";

import Card from "./Card";

export default function Results() {
  const { data } = useContext(Context);
  return (
    <div id="search-results">
      <div className="results">
        <h1>Rental Listings</h1>
        <div className="results-more">
          <p>{data.length} results</p>

          <ul>
            <li>
              Price <img src={SortTopToBottomIcon} alt="Sort Icon" />
            </li>
            <li>
              Square <img src={SortTopToBottomIcon} alt="Sort Icon" />
            </li>
            <li>
              Newest <img src={SortTopToBottomIcon} alt="Sort Icon" />
            </li>
          </ul>
        </div>

        <div className="row">
          {data.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
