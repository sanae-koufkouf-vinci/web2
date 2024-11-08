import { useState } from "react"
import Movie from "../type"

interface MovieItemProps {
    movie: Movie;
  }

const MovieItem =({movie} : MovieItemProps)=>{

    const [ descriptionVisible, setDescriptionVisible]= useState(false);
    

    return(
        <div className = 'movieCard'>
       <li onClick={() => setDescriptionVisible(!descriptionVisible)} >{movie.title} - Réalisateur :{" "} {movie.director}</li>
        <p>{descriptionVisible ? <p>{movie.description}</p> : null}</p>
        </div>
    )
}
export default MovieItem;