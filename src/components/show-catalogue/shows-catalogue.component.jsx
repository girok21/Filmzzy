import React, { useEffect, useContext } from 'react';
import { ShowsContext } from '../../contexts/shows.context';
import Loader from '../loader/loader.component';
import VerticalShowCard from '../show-card/vertical-show-card.component';
import './shows-catalogue.styles.scss';

const ShowsCatalogue = ({category})=>{
    const { showsList, loading, setCategory } = useContext(ShowsContext);
    useEffect(()=>{
        setCategory(category);
    });
    return (
        <div className="shows-catalogue">
            <div className="shows-list-container">
                {showsList && 
                showsList
                .map((show, i) => 
                    <VerticalShowCard key={i} Show={show}/>
                )}
            </div>
            <div className='loading-icon'>
                    {loading && <Loader />}
            </div>
        </div>
    )
}

export default ShowsCatalogue;