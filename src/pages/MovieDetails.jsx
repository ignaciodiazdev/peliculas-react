import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { get } from "../data/httpClient";
import { getMovieImg } from "../utils/getMovieImg";


export const MovieDetails = () => {

  const {movieId} = useParams()
  const [movie, setMovie] = useState([])
  const [generos, setGeneros] = useState([])

  useEffect( () => {
    get('/movie/' + movieId)
    .then( data => {
      setMovie(data)
      setGeneros(data.genres)
      console.log(data)
    })

  } , [movieId])

  const imageUrl = getMovieImg(movie.poster_path, 500)

  return (
    <div className="detailsContainer">
      <img src={imageUrl} alt={movie.title} />
      <div className="col moviedetails">
        <p className="title">
          <strong>Título - {movie.title}</strong>
        </p>
        <p>
          <strong>Descripción - {movie.overview}</strong>
        </p>
        <p>
          <strong>Género: 
          {generos.map( (genero) => (
            <> {genero.name}</>
          ))}
          </strong> 
        </p>
      </div>
    </div>

  )
}
