import './Movie.css';
import bg from './bg.jpg';

function Movie(props){
    const {Title, Year, imdbID, Type, Poster} = props;

    return (
        <div className="card">
            {/* {
                Poster === 'N/A' || Poster === 'https://m.media-amazon.com/images/M/MV5BOGZiOGVhM2ItOTA5OC00ODU2LWI3YTUtOTUzODFjYjhlMmExXkEyXkFqcGdeQXVyNjg3MTIwODI@._V1_SX300.jpg' || Poster === 'https://m.media-amazon.com/images/M/MV5BMThhOGQ0MDEtM2JiMy00YmUxLWIxYWMtOThkNGZjYmI2MjRlXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg' || Poster === 'https://m.media-amazon.com/images/M/MV5BZTQzNWMxZGMtOTdkMS00NGViLTljOTAtYTA2YTZlYTBiYjA3XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg' ? <img src={`https://picsum.photos/300/400/?blur`} /> : <img src={Poster} alt={imdbID} />
            } */}
             {/* {
                Poster === 'N/A' || Poster === 'https://m.media-amazon.com/images/M/MV5BOGZiOGVhM2ItOTA5OC00ODU2LWI3YTUtOTUzODFjYjhlMmExXkEyXkFqcGdeQXVyNjg3MTIwODI@._V1_SX300.jpg' || Poster === 'https://m.media-amazon.com/images/M/MV5BMThhOGQ0MDEtM2JiMy00YmUxLWIxYWMtOThkNGZjYmI2MjRlXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg' || Poster === 'https://m.media-amazon.com/images/M/MV5BZTQzNWMxZGMtOTdkMS00NGViLTljOTAtYTA2YTZlYTBiYjA3XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg' ? <img src={`https://placehold.co/300x400/FFFFFF/000?text=${Title}`} /> : <img src={Poster} alt={imdbID} />
            } */}

             {
                Poster === 'N/A' || Poster === 'https://m.media-amazon.com/images/M/MV5BOGZiOGVhM2ItOTA5OC00ODU2LWI3YTUtOTUzODFjYjhlMmExXkEyXkFqcGdeQXVyNjg3MTIwODI@._V1_SX300.jpg' || Poster === 'https://m.media-amazon.com/images/M/MV5BMThhOGQ0MDEtM2JiMy00YmUxLWIxYWMtOThkNGZjYmI2MjRlXkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg' || Poster === 'https://m.media-amazon.com/images/M/MV5BZTQzNWMxZGMtOTdkMS00NGViLTljOTAtYTA2YTZlYTBiYjA3XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg' ? <img src={bg} /> : <img src={Poster} alt={imdbID} />
            }
            
            <div>
                <h3>{Title}</h3>
                <p>{Year} <span>{Type}</span></p>
            </div>
        </div>
    )
}

export default Movie;