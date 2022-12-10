import './show-card.styles.scss';
import { ShowsContext } from '../../contexts/shows.context';
import React, { useContext } from 'react';

const VerticalShowCard = ({Show})=>{
    const {show} = useContext(ShowsContext);
    let{poster_path, title, release_date, vote_average, first_air_date, name, } = Show;
    // if(show === 'tv'){
    //     release_date = first_air_date;
    //     title = name;
    // }
    return(
        <div className='show-card-container'>
            <img className='poster'src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
            <div className="show-info">
                {title && <span className='title'>{title}</span>}
                {name && <span className='title'>{name}</span>}
                {release_date && <span className='release-date'>{release_date.slice(0,4)}</span>}
                {first_air_date && <span className='release-date'>{first_air_date.slice(0,4)}</span>}
                {vote_average ?
                (<span className='rating'> <span id='star'>&#9733;</span> {vote_average}/10</span>):(<></>)}
            </div>
        </div>
    )
}

export default VerticalShowCard;