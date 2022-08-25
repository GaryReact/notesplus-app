
// import './App.css';
import Moviescomp from './MovieList';
import SearchBar from './SearchBar';

import { useState } from 'react';
import { nanoid } from 'nanoid';
import './Movie.css';






function App() {
  const [movies, setmovies] = useState([{
    id: nanoid(),
    moviename: "Movie 1"

  }, {
    id: nanoid(),
    moviename: "Movie 2"

  }, {
    id: nanoid(),
    moviename: "Movie 3"

  }, {
    id: nanoid(),
    moviename: "Movie 4"

  }, {
    id: nanoid(),
    moviename: "Movie 5"

  }, {
    id: nanoid(),
    moviename: "Movie 6"

  }]);

  const addMovie = (text) => {
    const newmovie = {
      id: nanoid(),
      moviename: text
    }

    const Movieset = [...movies, newmovie];
    setmovies(Movieset);

  }

  const deletemovie = (id) => {
    const Movieset = movies.filter((moviedelete) => moviedelete.id !== id);
    setmovies(Movieset);

  }

  const [searchtext, setsearchtext] = useState("");





  return (



    <div className="App">
      <h1 id='Title'>Notes App</h1>
      <SearchBar SearchMovie={setsearchtext} />
      <Moviescomp movie={movies.filter((movie) => movie.moviename.toLowerCase().includes(searchtext))} changemovie={addMovie} moviedelete={deletemovie} />


    </div>
  );
}


export default App;
