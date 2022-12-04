import { useContext } from "react";
import HorizontalMovieCard from "../../components/movie-card/horizontal-movie-card.component";

import { MoviesContext } from "../../contexts/movies.context";
import Loader from "../../components/loader/loader.component";
import NowPlayingMovies from "../show-category/now-playing.component";
const Home = () => {
    const { popularMoviesList, topRatedMoviesList, upcomingMoviesList, nowPlayingMoviesList } = useContext(MoviesContext);
    return(
        <div className="home-container">
            <div className="upcoming-section">
                <h2 className="section-title">Upcoming</h2>
                <HorizontalMovieCard movie={upcomingMoviesList[0]} />
                <HorizontalMovieCard movie={upcomingMoviesList[1]} />
            </div>
            <div className="now-playing-section">
                <h2 className="section-title">Now Playing</h2>
                <HorizontalMovieCard movie={nowPlayingMoviesList[0]} />
            </div>
        </div>
    )
}

export default Home;