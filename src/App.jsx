import React from "react";
import { useEffect, useState } from "react";
import "./App.css"

const App = () => {
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);

    const getFilms = async () => {
        const res = await fetch('https://ghibliapi.herokuapp.com/films')
        const filmsData = await res.json();
        setFilms(filmsData)

        //=== no async 
        // fetch('https://ghibliapi.herokuapp.com/films')
        //     .then(res => res.json())
        //     .then(filmsData => setFilms(filmsData))
    }
    const getPpl = async () => {
        const res = await fetch('https://ghibliapi.herokuapp.com/people')
        const peopleData = await res.json();
        setPeople(peopleData)
    }
    return (
        <div>
            <h1>Films and Stars</h1>
            <button onClick={getFilms}>Load Films!</button>
            {films.map(films => <div className="col-md-6" key={films.id}>
                <div className="card shadow my-2" id="film">
                    <div className="card-body">
                        <h4 className="card-title">{films.title}</h4>
                        <p className="cardsubtitle text-muted">Original title: {films.original_title_romanised}</p>
                        <p className="card-text">{films.description}</p>
                    </div>
                </div>
            </div>
            )}
            <button onClick={getPpl}>Load People!</button>
            {people.map(people => <div className="col-md-6" key={people.name}>
                <div className="card" id="people">
                    <div className="card-body">
                        <h4 className="card-title">{people.name}</h4>
                        <p className="cardsubtitle text-muted">{people.gender}</p>
                        <p className="card-text">{people.age} years old, {people.eye_color} eys, {people.hair_color} hair </p>
                        <a href={people.films}  target="_blank">JSON</a>
                    </div>
                </div>
            </div>
            )}
        </div>

    );
};

export default App;