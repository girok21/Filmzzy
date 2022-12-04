import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MoviesContext = createContext({
    popularMoviesList: [],
    setPopularMoviesList: ()=>null,
    topRatedMoviesList: [],
    setTopRatedMoviesList: ()=>null,
    upcomingMoviesList: [],
    setUpComingMoviesList: ()=>null,
    fetchUrl : '',
    setFetchUrl: ()=>null,
    nowPlayingMoviesList: [],
    setNowPlayingMoviesList: ()=>null,
})

export const MoviesProvider = ({children})=>{
    const [popularMoviesList, setPopularMoviesList] = useState([]);
    const [topRatedMoviesList, setTopRatedMoviesList] = useState([]);
    const [upcomingMoviesList, setUpComingMoviesList] = useState([]);
    const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
                                        .then((response)=> setPopularMoviesList(response.data.results))
                                        .catch((error) => console.log(error));
            await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
                                        .then((response)=> setTopRatedMoviesList(response.data.results))
                                        .catch((error) => console.log(error));
            await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
                                        .then((response)=> setUpComingMoviesList(response.data.results))
                                        .catch((error) => console.log(error));
            await axios(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
                                        .then((response)=> setNowPlayingMoviesList(response.data.results))
                                        .catch((error) => console.log(error));

        };
        fetchMovies();
    }, []);
    const value = {
        popularMoviesList,
        topRatedMoviesList,
        upcomingMoviesList,
        nowPlayingMoviesList
    };
    return (
        <MoviesContext.Provider value = {value}>{children}</MoviesContext.Provider>
    )
}
