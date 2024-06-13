import React, { useEffect, useState } from "react"; 

import MovieCard from '../MovieCard/MovieCard'

const MoviesContainer = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    const apiPath = `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`
    fetch(apiPath)
      .then(response => response.json())
      .then(data => {
        setPopularMovies(data.results)
      })
      .catch(err => console.error(err));
  }, []);

  return <div className="p-4 mx-auto flex flex-wrap justify-center items-stretch min-h-screen">
  {
    popularMovies.map(movie => <MovieCard
      image={movie.poster_path}
      title={movie.title}
      description={movie.overview}
      key={movie.id}/>)
  }
  </div>;
};

export default MoviesContainer;
