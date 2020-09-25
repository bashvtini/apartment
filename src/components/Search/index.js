import React from "react";
import SearchForm from "./Form";
import Header from "../other/Header";

import Results from "./Results";

export default function Index({ history }) {
  return (
    <section id="search-page">
      <Header history={history} />

      <SearchForm />

      <Results />
    </section>
  );
}
