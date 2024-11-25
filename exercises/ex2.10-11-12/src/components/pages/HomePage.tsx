import { useOutletContext } from "react-router-dom";
import PageTitle from "../PageTitle"
import { MovieContext } from "../../types";
import MovieTitleList from "../MovieTitleListProps";

const HomePage = () => {
    const{movies}:MovieContext=useOutletContext();
    return(
        <div>
            <PageTitle title="myMovies"></PageTitle>
            <p>Welcome to myMovies, a site where you can find info about cinemas, movies...</p>
            <h4>My favorites movies </h4>
            <MovieTitleList movies={movies}/>

        </div>
    );
};

export default HomePage;