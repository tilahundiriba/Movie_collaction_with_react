import React from "react"

const MovieCard = (props) => {
    const AddFavourites = props.addFavourites;
    return (
        <>

            {props.movies.map((movie, index) => <div className="movie">
                <div>
                    <p>{movie.Year}</p>
                </div>
                <div>
                    <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />

                </div>
                <div onClick={() => props.handleFavouriteClick(movie)} >
                    <span>{movie.Type}</span>
                    <h3>{movie.Title}</h3>
                    <AddFavourites />
                 
                </div>



            </div>)}

        </>

    );
}
export default MovieCard;
