import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [ movies, setMovies ] = useState({
    docs: [],
    hasnextPage: Boolean,
    hasPrevPage: Boolean,
    limit: Number,
    nextPage: Number,
    page: Number,
    pagingCounter: Number,
    prevPage: Number,
    totalDocs: Number,
    totalPages: Number
  });

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(data => setMovies(data))
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return movies;
}

export default useInitialState;