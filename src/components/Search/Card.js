import React from "react";
import { Link } from "react-router-dom";

export default function Card({ card }) {
  const { price, description, location, poster, detail, apartmentId } = card;
  return (
    <Link to={`/apartment/${apartmentId}`}>
      <div className="card">
        <div className="card-poster">
          <img src={poster} alt="Apartment Poster" />
        </div>

        <div className="card-info">
          <p className="card-price">$ {price}/month</p>
          <p className="card-desc">{description}</p>
          <p className="card-location">{location}</p>

          <ul className="card-detail">
            {detail.map((info, index) => (
              <li key={index}>
                <img src={info.cover} alt={info.alt} />
                <p>
                  {info.count} {info.type}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Link>
  );
}
