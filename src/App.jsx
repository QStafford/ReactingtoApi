import React from "react";
import { useEffect, useState } from "react";
const App = () => {
    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);

    const getFilms = async () => {
        const res = await fetch('https://ghibliapi.herokuapp.com/films')
        const filmsData = await res.json();
        setFilms(filmsData)
    }
    const getPpl = async () => {
        const res = await fetch('https://ghibliapi.herokuapp.com/people')
        const peopleData = await res.json();
        setPeople(peopleData)
    }
    return (
        <div>
            <h1>Hello from App Component!</h1>
            <button onClick={getFilms}>Load Films!</button>
            {films.map(films => <div className="col-md-6" key={films.title}>
                <div className="card shadow my-2">
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
                <div className="card shadow my-2">
                    <div className="card-body">
                        <h4 className="card-title">{people.name}</h4>
                        <p className="cardsubtitle text-muted">{people.gender}</p>
                        <p className="card-text">{people.age}</p>
                    </div>
                </div>
            </div>
            )}
        </div>

    );
};

export default App;