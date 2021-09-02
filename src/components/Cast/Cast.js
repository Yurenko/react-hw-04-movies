import React, { Component } from 'react';
import * as API from '../../services/film-api';

class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const { match } = this.props;

    API.actors(match.params.movieId).then(res =>
      this.setState({ cast: res.cast }),
    );
  }

  render() {
    const { cast } = this.state;
    return (
      <div>
        <ul>
          {cast.map(i => (
            <li key={i.id}>
              <img src={`${i.profile_path}`} alt={i.title} />
              {i.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cast;
