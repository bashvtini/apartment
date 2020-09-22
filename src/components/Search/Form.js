import React, { useContext } from "react";

import SearchIcon from "../../assets/img/search.svg";

import { Context } from "../Context";

export default function Form() {
  const { setState, query } = useContext(Context);

  return (
    <div id="search-form">
      <form
        onSubmit={(form) => {
          form.preventDefault();
        }}
      >
        <div className="query form-input">
          <img src={SearchIcon} alt="Search Icon" />
          <input
            type="text"
            placeholder="Type location or key words"
            value={query}
            onChange={(e) => {
              setState("query", e.target.value);
            }}
          />
        </div>

        <select className="form-price form-input">
          <option value="none">Any Price</option>
          <option value="none">Any Price</option>
          <option value="none">Any Price</option>
          <option value="none">Any Price</option>
        </select>

        <select className="form-beds form-input">
          <option value="none">2-4 beds</option>
          <option value="none">2-4 beds</option>
          <option value="none">2-4 beds</option>
          <option value="none">2-4 beds</option>
        </select>

        <select className="form-square form-input">
          <option value="none">Any Square</option>
          <option value="none">Any Square</option>
          <option value="none">Any Square</option>
          <option value="none">Any Square</option>
        </select>

        <button type="submit">Apply</button>
      </form>
    </div>
  );
}
