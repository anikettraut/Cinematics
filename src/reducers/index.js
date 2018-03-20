import { combineReducers } from 'redux'
import MovieListReducer from './MovieListReducer'
import NavReducer from './NavReducer'


const rootReducer = combineReducers({
        MovieListData: MovieListReducer,
        isGridData:NavReducer
})

export default rootReducer;