import { useContext } from 'react';
import { MoviesContext } from '../../contexts/movies.context';
import VerticalMovieCard from '../../components/movie-card/vertical-movie-card.component';

import './show-category.styles.scss'

const NowPlayingMovies = ()=>{
    const { nowPlayingMoviesList } = useContext(MoviesContext);
    return (
        <div className="movies-container">
            {nowPlayingMoviesList && 
            nowPlayingMoviesList
            .map(movie => <VerticalMovieCard key={movie.id} movie={movie}/>)}
        </div>
    )
}

export default NowPlayingMovies;