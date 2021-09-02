import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as API from '../../services/film-api';

class HomePage extends Component {
  state = {
    films: [],
  };

  componentDidMount() {
    API.popularFilm().then(res => this.setState({ films: res }));
  }

  componentDidUpdate(prevState) {
    const { film } = this.state;
    if (prevState.film !== film) {
      API.popularFilm().then(res => this.setState({ film: res }));
    }
  }

  render() {
    const { films } = this.state;
    return (
      <div>
        {films && (
          <ul>
            {films.map(film => (
              <li key={film.id}>
                <NavLink to={`/movies/${film.id}`}>{film.title}</NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}
export default HomePage;
