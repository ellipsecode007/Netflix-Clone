import React, {useState, useEffect} from 'react'
import axios from './axios';
import "./Row.css";
import movieTrailer from "movie-trailer";
//import YouTube from "react-youtube";
import ReactPlayer from "react-player";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({title,fetchUrl, isLargeRow}) {
    //set variable is the way to use variable in react, when refreshed the data gets clean.
    const [movies, setMovies] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    useEffect(()=>{
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results); //check console on web on inspect to get the return structure of api
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    },[fetchUrl]); //[] is thr dependency, basically on which it depends, so if that changes it reloads. currently is blank so means
           // it changes only when page is reloaded i.e. only once, but if entered movies, so movies change this changes.
        const handleClickClose =() =>{
            setTrailerUrl("");
        };
        const handleClick = (movie) => {
            // if(trailerUrl)
            // {
                //  setTrailerUrl("");
            // }
            // else
            // {
                // setTrailerUrl("https://www.youtube.com/watch?v=XtMThy8QKqU&t=142s");
                // console.log(movie?.name);
                // console.table(movie);
                setTrailerUrl("");
                movieTrailer(movie.title || movie.name)
                .then((url)=>{
                    setTrailerUrl(url);
                    // console.log(url);
                    // const urlParams = new URLSearchParams(new URL(url).search);
                    // console.log(urlParams.get("v"));
                    // setTrailerUrl(urlParams.get("v"));
                    // console.log(trailerUrl);
                }).catch(error => console.log(error))
            // }
        }
           console.table(movies);
           return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row___posters'>
            {movies.map(movie =>(
                <img
                key={movie.id} 
                onMouseOver={()=>handleClick(movie)}
                onClick={()=>handleClickClose()}
                className={`row___poster ${isLargeRow && "row___posterLarge"}`}
                src ={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`} 
                alt = {movie.name}/>
            ))}
        </div>
        <div className='Player'>
        {trailerUrl && <ReactPlayer url = {trailerUrl} playing = {true} controls={true}/>}
        </div>
    </div>
  )
}

export default Row