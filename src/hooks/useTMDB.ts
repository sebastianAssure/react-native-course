import { useEffect, useState } from 'react';
import { IMovie } from '../interfaces/Movie';
import axios from 'axios';
import { TMDB_ACCESS_TOKEN, TMDB_BASE_URL } from '@env';

export const useTMDB = (path: string, params: object) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get(`${TMDB_BASE_URL}${path}`, {
          headers: {
            Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
            Accept: 'application/json',
          },
          params: params,
        });
        setMovies(response.data.results);
      } catch (error) {
        setError('Error fetching movies');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getMovies();
  }, [path]);
  return { movies, loading };
};
