import React, { Component } from "react";

import Image2 from "./../assets/img/apartments/2.jpg";
import Image3 from "./../assets/img/apartments/3.jpg";
import Image4 from "./../assets/img/apartments/4.jpg";
import Image5 from "./../assets/img/apartments/5.jpg";
import Image6 from "./../assets/img/apartments/6.jpg";
import Image7 from "./../assets/img/apartments/7.jpg";

import BedIcon from "./../assets/img/bed-solid.svg";
import BathIcon from "./../assets/img/bath-solid.svg";
import RoomIcon from "./../assets/img/crop-alt-solid.svg";

export const Context = React.createContext();
export default class Provider extends Component {
  state = {
    data: [
      {
        apartmentId: 1,

        price: "12,000",
        description: "Two-storey pool house",
        location: "ave. Gagarina, 25",
        poster: Image7,
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
        apartmentId: 2,
        price: "12,000",
        description: "Two-storey pool house",
        location: "ave. Gagarina, 25",
        poster: Image6,
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
        apartmentId: 3,
        price: "12,000",
        description: "Two-storey pool house",
        location: "ave. Gagarina, 25",
        poster: Image5,
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
        apartmentId: 4,
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
        apartmentId: 5,
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
        apartmentId: 6,
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
    ],
    query: "",
    buy: "",
    type: "",
    price: "",
    beds: "",
    square: "",

    setState: (type, value) => {
      this.setState({
        [type]: value,
      });
    },
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
