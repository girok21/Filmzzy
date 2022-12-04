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
    showsList: [],
    setShowsList: ()=>null,
})

export const MoviesProvider = ({children})=>{
    // const categoriesUrl = ['popular', 'top_rated', 'upcoming', ]
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState(''); 
    const [popularMoviesList, setPopularMoviesList] = useState([]);
    const [topRatedMoviesList, setTopRatedMoviesList] = useState([]);
    const [upcomingMoviesList, setUpComingMoviesList] = useState([]);
    const [nowPlayingMoviesList, setNowPlayingMoviesList] = useState([]);
    const [showsList, setShowsList] = useState([]);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if(category === '')
            return
        const fetchMovies = async () => {
            await axios(`https://api.themoviedb.org/3/movie/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
                                        .then((response)=> {
                                            setShowsList(prev => [...prev, ...response.data.results])
                                            setShowsList(arr => arr.filter((item,
                                                index, self) => self.findIndex((v) => v.id === item.id ) === index))
                                            setLoading(false);
                                        })
                                        .catch((error) => console.log(error));
        };
        fetchMovies();
    }, [page, category]);

    const resetValues = ()=>{
        setShowsList([]);
        setPage(1);
    }

    useEffect(()=>{
        resetValues()
    }, [category])

    // useEffect(() => {
    //     const fetchMovies = async () => {
    //         await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
    //                                     .then((response)=> {
    //                                         setPopularMoviesList(prev => [...prev, ...response.data.results])
    //                                         setPopularMoviesList(arr => arr.filter((item,
    //                                             index, self) => self.findIndex((v) => v.id === item.id ) === index))
    //                                         console.log(page)
    //                                         setLoading(false);
    //                                     })
    //                                     .catch((error) => console.log(error));
    //     };
    //     fetchMovies();
    // }, [page, category]);

    const handleScroll = ()=>{
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
            setLoading(true);
            setPage(prev => prev+ 1);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        console.log('scroll at end')
        return() => window.removeEventListener("scroll", handleScroll);
    })

    useEffect(()=>{
        const fetchMovies = async() => {
            await axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
            .then((response)=> setTopRatedMoviesList(response.data.results))
            .catch((error) => console.log(error));
        };
        fetchMovies();
    }, []);
    useEffect(()=>{
        const fetchMovies = async() => {
            await axios(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)
                                        .then((response)=> setUpComingMoviesList(response.data.results))
                                        .catch((error) => console.log(error));
        };
        fetchMovies();
    }, []);
    useEffect(()=>{
        const fetchMovies = async() => {
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
        nowPlayingMoviesList,
        showsList,
        loading,
        setCategory,
        category
    };
    return (
        <MoviesContext.Provider value = {value}>{children}</MoviesContext.Provider>
    )
}
