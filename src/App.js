import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component.jsx'
import NavigationBar from './routes/navigation/navigation.component';
import PopularShows from './routes/show-category/popular.component';
import TrendingShows from './routes/show-category/trending.component.jsx';
import UpcomingShows from './routes/show-category/upcoming.component.jsx'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<NavigationBar />}>
        <Route index element = {<Home />} />
        <Route path='/popular' element = {<PopularShows />} />
        <Route path='/upcoming' element = {<UpcomingShows />}/>
        <Route path = '/trending' element = {<TrendingShows/>} />
      </Route>
    </Routes>
  );
}

export default App;
