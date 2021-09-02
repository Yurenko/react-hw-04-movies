import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as API from '../../services/film-api';

class MoviesPage extends Component {
  state = {
    searchFilm: [],
    value: '',
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { history, match } = this.props;
    const { value } = this.state;
    API.searchFilm(value)
      .then(history.push(`${match.url}?query=${value}`))
      .then(res => this.setState({ searchFilm: res.results }));
    this.setState({ value: '' });
  };

  render() {
    const { value, searchFilm } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={value}
          />
          <button type="submit">Search</button>
        </form>
        {searchFilm && (
          <ul>
            {searchFilm.map(film => (
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
export default MoviesPage;
