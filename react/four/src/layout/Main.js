import React from "react";
import './Main.css';
import MovieList from "../components/MovieList";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

class Main extends React.Component{
    state = {
        movies: [],
        loading: true
    }

    componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=2a56611e&s=matrix')
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    searchMovie = (str, type='all', page) => {
        this.setState({loading: true})
        fetch(`http://www.omdbapi.com/?apikey=2a56611e&s=${str}${type !== 'all' ? `&type=${type}` : ''}${`&page=${page}`}`)
            .then(response => response.json())
            .then(data => this.setState({movies: data.Search, loading: false}))
    }

    render(){
        const {movies, loading} = this.state;
        
        return(
            <div className="main">
                <div className="wrap">
                    <Search searchMovie={this.searchMovie} />
                    {
                        loading ? <Preloader /> : <MovieList movies={movies} />  
                    }
                   
                </div>
            </div>
        )
    }
}

export default Main;