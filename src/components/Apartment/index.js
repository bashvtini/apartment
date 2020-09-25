import React, { useContext, useState, useEffect } from "react";
import Header from "../other/Header";
import Map from "./Map";

import { Context } from "../Context";

export default function Index({
  match: {
    params: { apartmentId },
  },
  history,
}) {
  const [apartmentData, setApartmentData] = useState({});

  const { data } = useContext(Context);

  useEffect(() => {
    for (const apartment of data) {
      if (apartment.apartmentId === parseInt(apartmentId, 10)) {
        setApartmentData(apartment);
        return;
      }
    }

    // eslint-disable-next-line
  }, []);

  return (
    <div id="apartment-page">
      <Header history={history} />

      <div className="apartment-content">
        <div className="apartment-location">
          <Map latitude={41.3236495312304} longitude={19.82713031948004} />
        </div>

        <div className="apartment-info">
          <div className="apartment-poster">
            <img src={apartmentData.poster} alt="Apartment Poster" />
          </div>

          <div className="apartment-info">
            <p className="apartment-price">$ {apartmentData.price}/month</p>
            <p className="apartment-desc">{apartmentData.description}</p>
            <p className="apartment-location">{apartmentData.location}</p>

            <ul className="apartment-detail">
              {apartmentData.detail &&
                apartmentData.detail.map((info, index) => (
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
      </div>
    </div>
  );
}
