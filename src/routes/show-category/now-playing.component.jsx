import './show-category.styles.scss'
import ShowsCatalogue from '../../components/show-catalogue/shows-catalogue.component';
const NowPlayingMovies = ()=>{
    return (
        <ShowsCatalogue category={'now_playing'}/>
    )
}

export default NowPlayingMovies;
