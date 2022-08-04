import { useEffect } from "react"
import { useState } from "react"

const Favorites = () => {
    const [movies, setMovies] = []

    useEffect(() => {
        favoritesData()
    }, [])

const favoritesData = () => {
    const stringFavouritesId = localStorage.getItem('favoritesIds')
    const favoritesIds = JSON.parse(stringFavouritesId)

    console.log(favoritesIds)
}
    return( 
        <>
        <h1>Favorites</h1>
        </>
    )
}

export default Favorites