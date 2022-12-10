import React, { useContext } from 'react';
import { ShowsContext } from '../../contexts/shows.context';

const Genre = ({genre})=>{
    const golden = 'rgb(210, 191, 55)';
    const black = 'rgb(3, 3, 3)';
    const {addGenreList} = useContext(ShowsContext);
    const onClickHandler = async() => {
        const elem = document.getElementById(genre.id);
        await addGenreList(genre.id);
        console.log(elem.style.backgroundColor);
        if(elem.style.backgroundColor === golden){
            elem.style.backgroundColor = black;
            elem.style.color = 'rgb(255, 255, 255)'
        }            
        else{
            elem.style.backgroundColor = golden;
            elem.style.color = black;
        }
    }
    return(
        <div className = 'genre-container' id = {genre.id} onClick= {onClickHandler}>
                            <span className='genre-title'>{genre.name}</span>
        </div>
    )
}

export default Genre;