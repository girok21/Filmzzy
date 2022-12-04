import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/home.component.jsx'
import NavigationBar from './routes/navigation/navigation.component';
import PopularMovies from './routes/show-category/popular.component';
import NowPlayingMovies from './routes/show-category/now-playing.component.jsx';
import UpcomingMovies from './routes/show-category/upcoming.component.jsx'
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<NavigationBar />}>
        <Route index element = {<Home />} />
        <Route path='/popular' element = {<PopularMovies />} />
        <Route path='/upcoming' element = {<UpcomingMovies />}/>
        <Route path = '/now-playing' element = {<NowPlayingMovies/>} />
      </Route>
    </Routes>
  );
}

export default App;
