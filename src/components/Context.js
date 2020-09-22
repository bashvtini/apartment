import React, { Component } from "react";

export const Context = React.createContext();
export default class Provider extends Component {
  state = {
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
