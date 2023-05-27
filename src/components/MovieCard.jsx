import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {

  const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path

  return (
    <div>
      <Link to={"/movies/" + movie.id}>
        <img  
          width  = { 230 }
          height = { 345 }
          src    = { imageUrl }  
          alt    = { movie.title } 
        />
      </Link>

      <h2>{movie.title}</h2>
    </div>
  );
};
