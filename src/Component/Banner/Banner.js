import React from 'react'
import './Banner.css'
import { useEffect,useState } from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../const/const'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((res)=>{
         let num =   Math.floor(Math.random() * 10) + 1;   
        console.log(res.data.results[num]);
            setMovie(res.data.results[num])
        })

    }, [])
    return (
        <div className='Banner1'
            style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
                    <div className='Banner'>
            <div className="content">
                <h1 className="title">{movie?movie.title:""}</h1>
                <div className="banner_button">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                    <h1 className="discription">{movie?movie.overview:""}</h1>
                </div>
                <div className="fade_bottom">

                </div>
            </div>
        </div>
    )
}

export default Banner
