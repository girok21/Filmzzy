import React, { useContext, useCallback, Fragment } from 'react';
import { ShowsContext } from '../../contexts/shows.context';
import Genre from './genre.component.jsx'
import './genres.styles.scss';

const Genres = ({GenresList})=>{
    const {selectedGenreList} = useContext(ShowsContext);
    const onClickHandler = (genre)=>{
        console.log(genre)
    };
    return(
        <Fragment>
            {GenresList && <div className="genres-container">
                {GenresList.map((genre) => <Genre genre={genre}/>)
                }
            </div>}
        </Fragment>
    )
}

export default Genres;