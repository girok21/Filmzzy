import { useEffect } from 'react';
import { useContext } from 'react';
import { MoviesContext } from '../../contexts/movies.context';
import Loader from '../loader/loader.component';
import VerticalMovieCard from '../movie-card/vertical-movie-card.component';
import './shows-catalogue.styles.scss';

const ShowsCatalogue = ({category})=>{
    const { showsList, loading, setCategory } = useContext(MoviesContext);
    useEffect(()=>{
        setCategory(category);
    })
    return (
        <>
            <div className="movies-container">
                {showsList && 
                showsList
                .map(movie => <VerticalMovieCard key={movie.id + movie.title} movie={movie}/>)}
            </div>
            <div className='loading-icon'>
                    {loading && <Loader />}
            </div>
        </>
    )
}

export default ShowsCatalogue;