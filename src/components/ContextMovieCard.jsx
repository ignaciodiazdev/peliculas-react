import { useState } from "react"
import { get } from "../data/httpClient"
import { useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

export const ContextMovieCard = () => {
  
  const[movies, setMovies] = useState([]);

  useEffect( () => {

    get('/discover/movie')
    .then( (data) => {
      setMovies(data.results)
    })

  }, [])

  return (
    <ul>
      {movies.map( (movie) => (
        <MovieCard  key={movie.id} movie={movie} />
      ))}
      {/* <MovieCard/> */}
    </ul>
    
  )
}
