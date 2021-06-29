import React, {useState, useEffect} from 'react';
import Header from './../components/Header';
import Search from './../components/Search';
import Movies from './../components/Movies';
import Item from './../components/Item';
import useInitialState from './../hooks/useInitialState';

import './../assets/styles/App.scss';

const API = 'http://localhost:5000/api/movies';

const App = () => {
  
  const initialState = useInitialState(API);
  let cantMovies = initialState.docs.length;
  let movies = initialState.docs.map(item => item);

  return cantMovies === 0 ? <h2>Loading...</h2> : (
    <section className="App">
      <Header />
      <Search />
      <h2>Peliculas</h2>
      <Movies>
        {
          movies?.map((item) => {
            return <Item key={item._id}{...item} />
          })
        }
      </Movies>
    </section>
  )
};

export default App;