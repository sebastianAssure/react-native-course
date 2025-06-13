import axios from 'axios';
import {TMDB_ACCESS_TOKEN, TMDB_BASE_URL} from '@env';
import {IMovie} from '../../interfaces/Movie';

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/popular`, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        Accept: 'application/json',
      },
      params: {
        include_adult: false,
        include_video: false,
        language: 'en-US',
        page: 1,
        sort_by: 'popularity.desc',
      },
    });

    return response.data.results as IMovie[];
  } catch (error: any) {
    console.error(
      'Error fetching movies:',
      error.response?.data || error.message,
    );
    return [];
  }
};

export const getMarvelMovies = async (): Promise<IMovie[]> => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/discover/movie`, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        Accept: 'application/json',
      },
      params: {
        include_adult: false,
        include_video: false,
        language: 'en-US',
        page: 1,
        sort_by: 'popularity.desc',
        with_companies: 420,
      },
    });

    return response.data.results as IMovie[];
  } catch (error: any) {
    console.error(
      'Error fetching Marvel movies:',
      error.response?.data || error.message,
    );
    return [];
  }
};

export const getTopRateMovies = async (): Promise<IMovie[]> => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/movie/top_rated`, {
      headers: {
        Authorization: `Bearer ${TMDB_ACCESS_TOKEN}`,
        Accept: 'application/json',
      },
      params: {
        include_adult: false,
        include_video: false,
        language: 'en-US',
        page: 1,
        sort_by: 'popularity.desc',
      },
    });

    return response.data.results as IMovie[];
  } catch (error: any) {
    console.error(
      'Error fetching Marvel movies:',
      error.response?.data || error.message,
    );
    return [];
  }
};
