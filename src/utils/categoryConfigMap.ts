import { params } from "./params";

export type CategoryConfig = {
  endpoint: string;
  param: object;
};

export const categoryConfigMap: Record<string, CategoryConfig> = {
  'Marvel studios': {
    endpoint: "/discover/movie",
    param: params.marvel
  },
  'Popular movies': {
    endpoint: "/movie/popular",
    param: params.popular
  },
  'Best movies': {
    endpoint: "/movie/top_rated",
    param: params.topRated
  }
};