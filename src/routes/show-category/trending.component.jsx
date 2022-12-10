import React,{ useEffect,useContext } from 'react';
import { ShowsContext,  } from '../../contexts/shows.context';
import ShowsCatalogue from '../../components/show-catalogue/shows-catalogue.component';

const TrendingShows = ()=>{
    const {setShowCategory} = useContext(ShowsContext);
    useEffect(()=>{
        setShowCategory('trending');
    })    
    return (
        <ShowsCatalogue category={'trending'}/>
    )
}

export default TrendingShows;
