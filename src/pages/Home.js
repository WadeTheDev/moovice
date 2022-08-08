/* eslint-disable react-hooks/exhaustive-deps */

import '../App.css'
import { useEffect } from 'react'
import { useState } from 'react'
import Card from '../components/Card'

const Home = () => {
    const [latestMovies, setLatestMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [nowplayingMovies, setNowplayingMovies] = useState([])
    const [upcomingMovies, setUpcomingMovies] = useState([])
    useEffect(() => {
        setMovies()
    }, [])

    const fetchMovies = async url => {
        const request = await fetch(url)
        const response = await request.json()
        return response
    }

    const setMovies = async () => {
        
        const topRated = await fetchMovies(`https://api.themoviedb.org/3/movie/top_rated?api_key=d807289972eb3bf953404dbfeb6c7956`)
        setTopRatedMovies(topRated.results)

        const nowPlaying = await fetchMovies(`https://api.themoviedb.org/3/movie/now_playing?api_key=d807289972eb3bf953404dbfeb6c7956`)
        setNowplayingMovies(nowPlaying.results)

        const upcoming = await fetchMovies(`https://api.themoviedb.org/3/movie/upcoming?api_key=d807289972eb3bf953404dbfeb6c7956`)
        setUpcomingMovies(upcoming.results)

        const latest = await fetchMovies(`https://api.themoviedb.org/3/movie/latest?api_key=d807289972eb3bf953404dbfeb6c7956`)
        setLatestMovies(latest)
    }
    console.log(latestMovies)
    return(
        <>
        <h1>Home</h1>
        <h6>LATEST MOVIE</h6>
        <div className="container">
            <Card film={latestMovies}/>
        </div>
        <h6>TOP RATED</h6>
        <div className='container'>
        {topRatedMovies.map((film,i) => {
            return(
                <Card key={i} film={film}/>
            )
        })}
        </div>
        <h6>NOW PLAYING</h6>
        <div className="container">
        {nowplayingMovies.map((film,i) => {
            return(
                <Card key={i} film={film}/>
            )
        })}
        </div>
        <h6>UPCOMING MOVIES</h6>
        <div className="container">
        {upcomingMovies.map((film,i) => {
            return(
                <Card key={i} film={film}/>
            )
        })}
        </div>
        </>
    )
}

export default Home