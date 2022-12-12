import React, {useState, useEffect} from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css';
function Banner() {
    const [movie,setMovie] = useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");
    useEffect(()=>{
        async function fetchData(){
            const request = await axios.get(requests.fetchTrending);
            setMovie(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);    
            console.table(request.data.results[Math.floor(Math.random()*request.data.results.length-1)]);
        }
        fetchData();
    },[])
    console.log(movie);
    function truncate(str,n){
        return str?.length>n ? str.substr(0,n-1) + "..." : str;
    }
  return (
    <header className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: "center center",
        }}
    >
        <div className="banner___contents">
            <h1 className='banner___title'>
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className='banner___buttons'>
                <button className='banner___button'>
                    Play
                </button>
                <button className='banner___button'>
                    My List
                </button>
            </div>
            <h1 className='banner___description'>
                {truncate(movie?.overview,150)}
            </h1>
            <div className="banner--fadeBottom"></div>
        </div>
    </header>
  )
}

export default Banner