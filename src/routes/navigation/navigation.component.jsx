import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import SearchBox from '../../components/search-box/search-box.component';

import './navigation.styles.scss';
const NavigationBar = () => {
    return(
        <Fragment>
            <div className='NavigationCover'>
                <div className='Navigation'>
                    <div className='nav-links'>
                        <Link className='logo-container' to='/' >
                            <span className='link-name'>Filmyzz Logo</span>
                        </Link>
                            <span className='link-name'>Movies</span>
                            <span className='link-name'>TV-Shows</span>
                            <span className='link-name'>Animated</span>
                    </div>
                    <SearchBox />
                </div>
            </div>
            <div className='SideBar'>
                <span className='section-title'>Movies</span>
                    <Link className='nav-links-container' to='/now-playing'>
                        <span className='link-name'>Now Playing</span>
                    </Link>
                    <Link className='nav-links-container' to='/popular'>
                        <span className='link-name'>Popular</span>
                    </Link>
                    <Link className='nav-links-container' to = '/upcoming' >
                        <span className='link-name'>Upcoming</span>
                    </Link>
                    <span className='section-title'>Genre</span>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default NavigationBar;