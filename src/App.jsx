import React from "react";
import { useEffect, useState } from "react";
const App = () => {
    const [films, setFilms] = useState([]);
    
    const getFilms = async () => {
        const res = await fetch('https://ghibliapi.herokuapp.com/films')
        const filmsData =await res.json();
        setFilms(filmsData)
    }
    return (
        <div>
            <h1>Hello from App Component!</h1>
            <button onClick = {getFilms}>Load Films!</button>
            {films.map (films => <div key = {films.title}>{films.title}</div> )}
        </div>

    );
};

export default App;