import React, { Component } from 'react'
import Movie from './../movie.json'
//afficher/MAPPER les film qui se trouve dans le fichier movie.json
const Show = props=>(
    <div className="movie-container">
    {console.log(Movie)}
    {(Movie.movie.map(movie=>
    <div className="movie-wrapper">
    <h3>{movie.Title}</h3>
    <p>{movie.Actors}</p>
    
    </div>
    
    ))}
    </div>
)

export default Show;