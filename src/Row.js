import React, {useState, useEffect} from 'react'
import axios from './axios';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl}) {
    //set variable is the way to use variable in react, when refreshed the data gets clean.
    const [movies, setMovies] = useState([]);
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results); //check console on web on inspect to get the return structure of api
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]); //[] is thr dependency, basically on which it depends, so if that changes it reloads. currently is blank so means
           // it changes only when page is reloaded i.e. only once, but if entered movies, so movies change this changes.
    console.table(movies);
           return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row___posters'>
            {movies.map(movie =>(
                <img className='row___poster' src ={`${base_url}${movie.poster_path}`} alt = {movie.name}/>
            ))}
        </div>
    </div>
  )
}

export default Row