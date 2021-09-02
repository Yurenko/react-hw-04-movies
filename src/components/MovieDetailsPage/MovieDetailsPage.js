import React, { Component, lazy } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import * as API from '../../services/film-api';
import style from './MoviesDetailsPage.module.css';

const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews/Reviews'));

class MovieDetailsPage extends Component {
  state = {
    currentFilm: {},
  };

  componentDidMount() {
    const { match } = this.props;
    API.filmToId(match.params.movieId).then(res =>
      this.setState({ currentFilm: res }),
    );
  }

  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { currentFilm } = this.state;
    const { match } = this.props;
    return (
      <div>
        <button type="button" onClick={this.handleClick}>
          &#8592; Go to back
        </button>
        <div>
          <h1>{currentFilm.title}</h1>
          <h3>Overview</h3>
          <p>{currentFilm.overview}</p>
          <h3>Genres</h3>
          {currentFilm.genres &&
            currentFilm.genres.map(i => <span key={i.id}>{i.name} </span>)}
        </div>
        <div className={style.moviesInfo}>
          <p>Additional information</p>
          <div>
            <Link to={`${match.url}/cast`}>Cast</Link>
          </div>
          <div>
            <Link to={`${match.url}/reviews`}>Reviews</Link>
          </div>
        </div>
        <Switch>
          <Route path="/movies/:movieId/cast" component={Cast} />
          <Route path="/movies/:movieId/reviews" component={Reviews} />
        </Switch>
      </div>
    );
  }
}
export default MovieDetailsPage;
