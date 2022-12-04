import './movie-card.styles.scss';

const VerticalMovieCard = ({movie})=>{
    const{poster_path, title, release_date, vote_average} = movie;
    return(
        <div className='movie-card-container'>
            <img className='poster'src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
            <div className="movie-info">
                <span className='title'>{title}</span>
                <span className='release-date'>{release_date.slice(0,4)}</span>
                {vote_average ?
                (<span className='rating'> <span id='star'>&#9733;</span> {vote_average}/10</span>):(<></>)}
            </div>
        </div>
    )
}

export default VerticalMovieCard;