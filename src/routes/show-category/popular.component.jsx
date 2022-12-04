import { useContext } from 'react';
import VerticalMovieCard from '../../components/movie-card/vertical-movie-card.component';
import { MoviesContext } from '../../contexts/movies.context';

import './show-category.styles.scss'
const PopularMovies = ()=>{
    const { popularMoviesList } = useContext(MoviesContext);
    return (
        <div className="movies-container">
            {popularMoviesList && 
            popularMoviesList
            .map(movie => <VerticalMovieCard key={movie.id} movie={movie}/>)}
        </div>
    )
}

export default PopularMovies;