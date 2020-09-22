import React, { useState } from "react";

import SortTopToBottomIcon from "../../assets/img/sort-amount-down-alt-solid.svg";
// import SortBottomToTopIcon from "../../assets/img/sort-amount-up-alt-solid.svg";

import ReactMapGL, { Marker } from "react-map-gl";

import Card from "./Card";

export default function Results({ results }) {
  const [viewport, setViewport] = useState({
    latitude: 41.32965422239508,
    longitude: 19.82568090077774,
    zoom: 13,
    width: "100%",
    height: "100%",
  });
  return (
    <div id="search-results">
      <div className="map">
        <ReactMapGL
          {...viewport}
          mapboxApiAccessToken="pk.eyJ1IjoiYmFzaHZ0aW5pIiwiYSI6ImNrZmUxNDNzMzAwaGMycW8zZXp3MDQzdW0ifQ.R_UOprhFJFk5bOBCOSXU8g"
          mapStyle="mapbox://styles/bashvtini/ckfe1mkk400r219lo6jg7jxap"
          onViewportChange={(view) => {
            setViewport(view);
          }}
        >
          <Marker latitude={41.32965422239508} longitude={19.82568090077774}>
            <div>hello </div>
          </Marker>
        </ReactMapGL>
      </div>
      <div className="results">
        <h1>Rental Listings</h1>
        <div className="results-more">
          <p>{results.length} results</p>

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
          {results.map((card, index) => (
            <Card card={card} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
