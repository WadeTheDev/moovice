import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import '../App.css'


const Popular = () => {

    const [films, setfilms] = useState(null)

    useEffect(() => {
        filmsData()
      }, [])

      const filmsData = async () => {
        const request = await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d807289972eb3bf953404dbfeb6c7956`)
        const response = await request.json()
        setfilms(response)
    }
    if (films === null) {
        return(
            <>
            <h1>Popular</h1>
            <h2>Loading</h2>
      
            </>
        )
    }else{
    return ( 
        <>
        <h1>Popular</h1>
        <div className='container'>
        {films.results.map((film,i) => {
            return(
                <Card key={i} film={film}/>
            )
        })}
        </div>
        </>
    )
        }
}

export default Popular