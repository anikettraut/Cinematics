import { combineReducers } from 'redux'
import SimilarMoviesListReducer from './SimilarMoviesListReducer'
import MovieListReducer from './MovieListReducer'
import MovieDetailReducer from './MovieDetailReducer'
import CastListReducer from './CastListReducer'
import CastPicsReducer from "./CastPicsReducer";
import PeopleImageReducer from './PeopleImageReducer'
import VideoListReducer from './VideoListReducer'
import MovieDataReducer from './MovieDataReducer'
import PeopleDetailReducer from './PeopleDetailReducer'
import PeopleMoviesReducer from './PeopleMoviesReducer'
import PeopleTvShowReducer from './PeopleTvShowReducer'


const rootReducer = combineReducers({
  MovieListData: MovieListReducer,
  MovieDetails: MovieDetailReducer,
  SimilarMovieListData: SimilarMoviesListReducer,
  CastListData: CastListReducer,
  CastPics: CastPicsReducer,
	PeopleImageData: PeopleImageReducer,
	VideoListData: VideoListReducer,
	MoviesData: MovieDataReducer,
	PeopleDetails: PeopleDetailReducer,
	PeopleMoviesData: PeopleMoviesReducer,
	PeopleTvShowData: PeopleTvShowReducer
});

export default rootReducer;
