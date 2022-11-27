import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MoviesContext = createContext({
    moviesList: [],
    setMoviesList: ()=>null,
    fetchUrl : '',
    setFetchUrl: ()=>null
})

export const MoviesContextProvider = ({children})=>{
    const [moviesList, setMoviesList] = useState([]);
    const [fetchUrl, setFetchUrl] = useState("");
    useEffect(()=>{
        if(fetchUrl!=='')
        axios.get(fetchUrl)
        .then((response)=>{
            setMoviesList(response.data.results);
        })
        else
        console.log('blank url')
    }, [fetchUrl]);
    console.log(moviesList);
    const value = {
        moviesList,
        setMoviesList,
        fetchUrl, 
        setFetchUrl,
    };
    return(
        <MoviesContext.Provider value={value}>{children}</MoviesContext.Provider>
    )
}