import React from 'react'

import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShowsContext = createContext({
    showsList: [],
    setShowsList: ()=>null,
    show: '',
    setShow: ()=>null,
    showCategory: '',
    setShowCategory: ()=>null,
    selectedGenreList: [],
    setSelectedGenreList: ()=>null
})

export const ShowsProvider = ({children})=>{
    const[show, setShow] = useState('movie');
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState(''); 
    const [showCategory, setShowCategory] = useState('popular'); 
    const [showsList, setShowsList] = useState([]);
    const [genresList, setGenresList] = useState([]);
    const [selectedGenreList, setSelectedGenreList] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const fetchGenres = async()=>{
            await axios(`https://api.themoviedb.org/3/genre/${show}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
                                        .then((response)=> {
                                            setGenresList(response.data.genres)
                                        })
                                        .catch((error) => console.log(error));
        }
        fetchGenres();
    },[show])
    useEffect(() => {
        if(category === '' || show==='')
            return
        const fetchMovies = async () => {
            category!=='trending' && await axios(`https://api.themoviedb.org/3/${show}/${category}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
                                        .then((response)=> {
                                            setShowsList(prev => [...prev, ...response.data.results])
                                            setShowsList(arr => arr.filter((item,
                                                index, self) => self.findIndex((v) => v.id === item.id ) === index))
                                            setLoading(false);
                                        })
                                        .catch((error) => console.log(error));
            category === 'trending' && await axios(`https://api.themoviedb.org/3/${category}/${show}/day?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
            .then((response)=> {
                setShowsList(prev => [...prev, ...response.data.results])
                setShowsList(arr => arr.filter((item,
                    index, self) => self.findIndex((v) => v.id === item.id ) === index))
                setLoading(false);
            })
            .catch((error) => console.log(error));
        };
        fetchMovies();
    }, [page, category, show]);
    const resetValues = ()=>{
        setShowsList([]);
        setPage(1);
    }

    useEffect(()=>{
        resetValues();
    }, [category])
    const handleScroll = ()=>{
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight){
            setLoading(true);
            setPage(prev => prev+ 1);
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll", handleScroll);
        return() => window.removeEventListener("scroll", handleScroll);
    })

    const addGenreList = (id)=>{
        if(selectedGenreList.includes(id)){
            setSelectedGenreList(prev => {
                prev.splice(prev.indexOf(id), 1);
                return prev;
            });
        }else{
            setSelectedGenreList(prev => [...prev, id])
        }
    }
    const value = {
        showsList,
        loading,
        setCategory,
        category,
        show,
        setShow,
        resetValues,
        showCategory,
        setShowCategory,
        addGenreList,
        selectedGenreList, 
        genresList
    };
    return (
        <ShowsContext.Provider value = {value}>{children}</ShowsContext.Provider>
    )
}
