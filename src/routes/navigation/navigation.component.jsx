import React, { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Genres from '../../components/genres/genres.component';
import SearchBox from '../../components/search-box/search-box.component';
import { ShowsContext } from '../../contexts/shows.context';

import './navigation.styles.scss';
const NavigationBar = () => {
    let ShowType = 'Movies'
    const {setShow, show, resetValues, genresList} = useContext(ShowsContext);
    if(show === 'tv')
        ShowType = 'TV-Shows'
    function onClickHandler(arg_show){
        return async()=>{
            if(show === arg_show) return;
            await setShow(arg_show);
            await resetValues();
        }
    }
    return(
        <Fragment>
            <div className='NavigationCover'>
                <div className='Navigation'>
                    <div className='nav-links'>
                        <Link className='logo-container' to='/' >
                            <span className='link-name'>Filmyzz Logo</span>
                        </Link>
                            <div className="link-name" onClick={onClickHandler('movie')}>
                                <span>Movies</span>
                            </div>
                            <div className="link-name" onClick={onClickHandler('tv')}>
                                <span>TV-Shows</span>
                            </div>
                    </div>
                    <SearchBox />
                </div>
            </div>
            <div className='SideBar'>
                <span className='section-title'>{`${ShowType}`}</span>
                    <Link className='nav-links-container' to='/trending'>
                        <span className='link-name'>Trending</span>
                    </Link>
                    <Link className='nav-links-container' to='/popular'>
                        <span className='link-name'>Popular</span>
                    </Link>
                    <Link className='nav-links-container' to = '/upcoming' >
                        <span className='link-name'>{show==='tv' ? 'On-the-Air':'Upcoming'}</span>
                    </Link>
                    <span className='section-title'>Genre</span>
                    {genresList && <Genres GenresList={genresList} />}
            </div> 
            <Outlet/>
        </Fragment>
    )
}

export default NavigationBar;