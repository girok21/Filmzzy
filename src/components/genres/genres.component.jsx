import Genre from './genre.component.jsx'
import './genres.styles.scss';

const Genres = ({GenresList})=>{

    return(
        <>
            {GenresList && <div className="genres-container">
                {GenresList.map(genre => <Genre key={genre.id} genre={genre}/>)}
            </div>}
        </>
    )
}

export default Genres;