import React from "react";
import SearchForm from "./Form";
import Header from "../other/Header";

import Image1 from "../../assets/img/apartments/1.jpg";
import Image2 from "../../assets/img/apartments/2.jpg";
import Image3 from "../../assets/img/apartments/3.jpg";
import Image4 from "../../assets/img/apartments/4.jpg";

import BedIcon from "../../assets/img/bed-solid.svg";
import BathIcon from "../../assets/img/bath-solid.svg";
import RoomIcon from "../../assets/img/crop-alt-solid.svg";

import Results from "./Results";

export default function Index({ history }) {
  const data = [
    {
      price: "12,000",
      description: "Two-storey pool house",
      location: "ave. Gagarina, 25",
      poster: Image1,
      detail: [
        {
          cover: BedIcon,
          alt: "Bed Icon",
          count: 2,
          type: "Beds",
        },
        {
          cover: BathIcon,
          alt: "Bath Icon",
          count: 3,
          type: "Baths",
        },
        {
          cover: RoomIcon,
          alt: "Room Size Icon",
          count: 400,
          type: "sqft",
        },
      ],
    },
    {
      price: "25,000",
      description: "Blue poplar house",
      location: "ave. Gogolya, 27",
      poster: Image2,
      detail: [
        {
          cover: BedIcon,
          alt: "Bed Icon",
          count: 6,
          type: "Beds",
        },
        {
          cover: BathIcon,
          alt: "Bath Icon",
          count: 3,
          type: "Baths",
        },
        {
          cover: RoomIcon,
          alt: "Room Size Icon",
          count: 200,
          type: "sqft",
        },
      ],
    },
    {
      price: "29,000",
      description: "Wooden house in the forest",
      location: "ave. Soborona, 55",
      poster: Image3,
      detail: [
        {
          cover: BedIcon,
          alt: "Bed Icon",
          count: 8,
          type: "Beds",
        },
        {
          cover: BathIcon,
          alt: "Bath Icon",
          count: 6,
          type: "Baths",
        },
        {
          cover: RoomIcon,
          alt: "Room Size Icon",
          count: 600,
          type: "sqft",
        },
      ],
    },
    {
      price: "10,000",
      description: "On the outskirts",
      location: "ave. Kazakova, 38",
      poster: Image4,
      detail: [
        {
          cover: BedIcon,
          alt: "Bed Icon",
          count: 2,
          type: "Beds",
        },
        {
          cover: BathIcon,
          alt: "Bath Icon",
          count: 6,
          type: "Baths",
        },
        {
          cover: RoomIcon,
          alt: "Room Size Icon",
          count: 120,
          type: "sqft",
        },
      ],
    },
  ];
  return (
    <section id="search-page">
      <Header history={history} />

      <SearchForm />

      <Results results={data} />
    </section>
  );
}
