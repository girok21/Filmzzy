import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import Home from './routes/home/home.component.jsx'
import NavigationBar from './routes/navigation/navigation.component';
import PopularMovies from './routes/popular/popular.component';
import TopRatedMovies from './routes/top-rated/top-rated.component.jsx'
import UpcomingMovies from './routes/upcoming/upcoming.component.jsx'
import { MoviesContext } from './contexts/movies.context.jsx';

import './App.css';

function App() {
  const API_URL = 'https://api.themoviedb.org/3/';
  const API_KEY_URL = '?api_key=';
  
  const {setFetchUrl} = useContext(MoviesContext);
  useEffect(()=>{
    setFetchUrl(API_URL+'/trending/movie/day'+API_KEY_URL+process.env.REACT_APP_API_KEY)
  },)
  // demoFUnc(API_URL+'/trending/movie/day'+API_KEY_URL+process.env.REACT_APP_API_KEY);

  return (
    <Routes>
      <Route path='/' element = {<NavigationBar />}>
        <Route index element = {<Home />} />
        <Route path='/popular' element = {<PopularMovies />} />
        <Route path='/upcoming' element = {<UpcomingMovies />}/>
        <Route path = 'top-rated' element = {<TopRatedMovies/>} />
      </Route>
    </Routes>
  );
}

export default App;
