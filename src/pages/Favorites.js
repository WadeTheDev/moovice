import { useEffect } from "react"
import { useState } from "react"
import Card from "../components/Card"

const Favorites = (props) => {
    const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchFavoriteMovies()
  })

  const fetchFavoriteMovies = async () => {
    const stringifiedFavoriteIds = localStorage.getItem('favoritesIds')
    const favoriteIds = JSON.parse(stringifiedFavoriteIds)

    if (favoriteIds) {
      const promises = favoriteIds.map(id => {
        return fetchMovie(id)
      })

      const response = await Promise.all(promises)
      setMovies(response)
    }
  }

  const fetchMovie = async id => {
    const request = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=fea42b1e836ac59816b8332e564dbb41`
    )
    const response = await request.json()
    return response
  }

    return( 
        <>
        <h1>Favorites</h1>
        <div className='container'>
        {movies.map((film,i) => {
            return(
                <Card key={i} film={film}/>
            )
        })}
        </div>
        </>
    )
}

export default Favorites