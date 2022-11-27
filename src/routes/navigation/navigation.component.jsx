import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import SearchBox from '../../components/search-box/search-box.component';
import { MoviesContext } from '../../contexts/movies.context';

import './navigation.styles.scss';
const NavigationBar = () => {
    const API_URL = 'https://api.themoviedb.org/3/';
    const API_KEY_URL = '?api_key=';
    const {setFetchUrl} = useContext(MoviesContext);

    const onClickHandler= (addon)=>{
        console.log('fetch movies now')
    }
    return(
        <Fragment>
            <div className='Navigation'>
                <div className='nav-links'>
                    <Link className='logo-container' to='/' >
                        Filmyzz Logo
                    </Link>
                    <Link className='nav-links-container' to='/popular' onClick={onClickHandler('/trending/movie/day')}>
                        Popular
                    </Link>
                    <Link className='nav-links-container' to = '/top-rated' >
                        Top Rated
                    </Link>
                    <Link className='nav-links-container' to = '/upcoming' >
                        Upcoming
                    </Link>
                </div>
                <SearchBox />
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default NavigationBar;