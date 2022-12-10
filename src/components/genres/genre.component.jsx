const Genre = ({genre})=>{
    const onClickHandler = (genre)=>{
        console.log(genre)
    };
    return(
        <div className = 'genre-container' key = {genre.id} onClick= {onClickHandler(this, genre)}>
                            <span className='genre-title'>{genre.name}</span>
        </div>
    )
}

export default Genre;