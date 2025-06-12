import axios from 'axios';
import { TMDB_ACCESS_TOKEN, TMDB_BASE_URL } from '@env';
import { Movie } from '../../interfaces/Movie';


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

    console.log(response.data.results as Movie[]);
    return response.data.results as Movie[];
  } catch (error: any) {
    console.error('Error fetching movies:', error.response?.data || error.message);
    return [];
  }
};


