import '../App.css'

const Card = (props) =>{
    const handleClickFavourites = () => {
        let stringFavouritesId = localStorage.getItem('favoritesIds')
        let favoritesIds = []
        if (stringFavouritesId) {
            favoritesIds  = JSON.parse(stringFavouritesId)
        }

        favoritesIds.push(props.film.id)
        stringFavouritesId = JSON.stringify(favoritesIds)
        localStorage.setItem('favoritesIds', stringFavouritesId)

        console.log(favoritesIds)
    }
    return ( 
        <div className="card">
        <img src={`https://image.tmdb.org/t/p/w300/${props.film.poster_path}`} alt={props.film.original_title} />
            <h2>{props.film.original_title}</h2>
            <p>Release : {props.film.release_date}</p>
            <p>Synopsis : {props.film.overview}</p>
            <button onClick={handleClickFavourites}>Add to Favorites</button>
        </div>
    )
}

export default Card