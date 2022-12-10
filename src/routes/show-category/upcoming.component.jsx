import React, { useEffect,useContext } from 'react';
import { ShowsContext,  } from '../../contexts/shows.context';
import ShowsCatalogue from '../../components/show-catalogue/shows-catalogue.component';


const UpcomingShows = ()=>{
    const {show, setShowCategory} = useContext(ShowsContext);
    useEffect(()=>{
        setShowCategory('upcoming');
    })
    return (
        <ShowsCatalogue category={show==='movie'?'upcoming':'on_the_air'}/>
    )
}

export default UpcomingShows;
