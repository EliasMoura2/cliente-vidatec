import React from 'react';
import './../assets/styles/components/Search.scss';

const Search = () => (
  <section className="search">
    <h2 className="search__title">Buscar pelicula</h2>
    <input type="text" className="input" placeholder="Buscar..." />
  </section>
);

export default Search;