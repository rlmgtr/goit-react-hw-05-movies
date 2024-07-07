import { useEffect, useState } from 'react';
import { fetchMovieByQuery } from 'api/api';
import { MovieList } from 'components/MovieList/MovieList';
import { Outlet } from 'react-router-dom';
import { useSearchParams, useNavigate } from 'react-router-dom';
import css from './MoviesPage.module.css';

const MoviesPage = () => {
  // const [searchQuery, setSearchQuery] = useState('Friends');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? 'Friends'; // Default search query is 'Friends'

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      if (!movieName.trim()) return;
      setIsLoading(true);

      try {
        const movies = await fetchMovieByQuery(movieName);

        if (movies.length === 0) {
          navigate('/not-found', { replace: true });
          return;
        }
        console.log('movies', movies);
        setMovies(movies);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchMovies();
  }, [movieName, navigate]);

  return (
    <div>
      <div className={css.inputWrapper}>
        <input
          type="text"
          className={css.input}
          onChange={e => updateQueryString(e.target.value)}
          placeholder="Search movies..."
        />
        {/* Removed the button since the search updates automatically with the input */}
        {/* <button onClick={fetchMovies}>Search</button> */}
      </div>
      {isLoading ? (
        <p style={{ textAlign: 'center' }}>Loading...</p>
      ) : (
        <MovieList movies={movies} />
      )}
      <Outlet />
    </div>
  );
};

export default MoviesPage;
