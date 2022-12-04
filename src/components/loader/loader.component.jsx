import './loader.styles.scss'

const Loader = ()=>{
    console.log('got-called')
    return(
        <div className="lds-ripple"><div></div><div></div></div>
    )
}

export default Loader;