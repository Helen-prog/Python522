import Movie from './Movie';
import './MovieList.css';

function MovieList(props){
    const {movies = []} = props

    return (
        <div className="movies">
            {
                movies.length ? movies.map((movie, index) => {
                    return <Movie {...movie} key={index} />
                }) : <h3>Nothing Found</h3>
            }
        </div>
    )
}

export default MovieList;