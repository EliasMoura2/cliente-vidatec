import React from 'react';
import Pagination from '../components/Pagination';

const Movies = ({children}) => (
  <section className="row container-fluid justify-content-md-center">
    {children}
    <Pagination />
  </section>
);

export default Movies;