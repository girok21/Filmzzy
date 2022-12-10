import React, { useContext } from 'react';
import { ShowsContext } from '../../contexts/shows.context';

import './genres.styles.scss';

const Genres = ({GenresList})=>{
    const {selectedGenreList} = useContext(ShowsContext);
    // const onClickHandler = (abc)=>{
    //     console.log(abc, selectedGenreList)          onClick={()=>{onClickHandler(genre)}}
    // }
    return(
        <>
            {GenresList && <div className="genres-container">
                {GenresList.map((genre) => <div className = 'genre-container' key = {genre.id} >
                        <span className='genre-title'>{genre.name}</span>
                </div>)}
            </div>}
        </>
    )
}

export default Genres;