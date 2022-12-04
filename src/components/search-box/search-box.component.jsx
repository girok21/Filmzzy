import { Fragment } from 'react'

import './search-box.styles.scss'

const SearchBox = ()=>{
    return(
        <Fragment>
            {<input className='search-box-container' 
                type = 'text'
                placeholder = 'Search for a Movie or TV-Show'
                // onClick={onCLickHandler}
            />}
        </Fragment>
    )
}

export default SearchBox;