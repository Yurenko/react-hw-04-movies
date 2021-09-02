import React, { Component } from 'react';
import * as API from '../../services/film-api';

class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const { match } = this.props;

    API.actors(match.params.movieId).then(res =>
      this.setState({ reviews: res.reviews }),
    );
  }

  render() {
    const { reviews } = this.state;
    return <div>{reviews ? <p>{reviews}</p> : <p>not reviews</p>}</div>;
  }
}

export default Reviews;
