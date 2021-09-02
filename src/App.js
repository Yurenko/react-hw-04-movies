import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header/Header';

const HomePage = lazy(() => import('./components/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./components/HomePage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./components/MovieDetailsPage/MovieDetailsPage'),
);

function App() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Завантаження...</div>}>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
      </Suspense>
    </div>
  );
}

export default App;
