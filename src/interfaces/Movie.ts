export interface IMovie {
  id: number;
  title?: string;
  overview: string;
  poster_path: string;
  release_date: string;
}

export interface MovieDetail extends IMovie {
  backdrop_path?: string;
  genres?: {id: number; name: string}[];
  runtime?: number;
  vote_average?: number;
}
