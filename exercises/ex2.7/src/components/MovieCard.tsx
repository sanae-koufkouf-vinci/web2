import { Movie } from "../types";

interface MovieCardProps{
    movie:Movie;
}

const MovieCard = ({movie}:MovieCardProps)=>{
    
    return(
        <div className="card">
          <div className="body"> 
           <h3 className="card-title">{movie.title}</h3>
           
           {movie.imageUrl && ( // sert à dire si movie.imageUrl existe alors tu affiche l'image sinon tu fais rien (un peu comme le ? : sauf qu'il n'ya pas de null à mettre après)
            <img src={movie.imageUrl} className="card-img-top" alt={movie.title} />
            )}
             <p className="card-text">
          <strong>Réalisateur :</strong> {movie.director}
        </p>
        <p className="card-text">
          <strong>Durée :</strong> {movie.duration} minutes
        </p>
        {movie.budget && (
          <p className="card-text">
            <strong>Budget :</strong> {movie.budget} millions de dollars
          </p>
        )}
        {movie.description && (
          <p className="card-text">
            <strong>Description :</strong> {movie.description}
          </p>
        )}
          </div>

        </div>
    );
};

export default MovieCard;