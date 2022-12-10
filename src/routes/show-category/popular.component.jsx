import React from 'react'
import { useEffect,useContext } from 'react';
import { ShowsContext } from '../../contexts/shows.context';
import ShowsCatalogue from '../../components/show-catalogue/shows-catalogue.component';
const PopularShows = ()=>{
    const {setShowCategory} = useContext(ShowsContext);
    useEffect(()=>{
        setShowCategory('popular');
    })    
    return (
            <ShowsCatalogue category={'popular'}/>
    )
}

export default PopularShows;