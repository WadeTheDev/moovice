import { useEffect } from "react"
import { useState } from "react"
import Card from "../components/Card"
import moment from "moment"

const Weekly = () => {

    const [films, setfilms] = useState([])

    useEffect(() => {
        fetchMovies()
    }, [])

    const fetchMovies = async () => {
    const today = moment().format('YYYY-MM-DD')
    const sevenDaysAgo = moment().subtract(7, 'days').format('YYYY-MM-DD')
    const url = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${sevenDaysAgo}&primary_release_date.lte=${today}&api_key=d807289972eb3bf953404dbfeb6c7956` 
    const request = await fetch(url)
    const response = await request.json()
    setfilms(response.results)
    }
    return(
        <>
        <h1>Weekly</h1>
        <div className="container">
        {films.map((film,i) => {
            return(
                <Card key={i} film={film}/>
            )
        })}
        </div>
        </>
    )
} 

export default Weekly