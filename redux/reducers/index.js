import { combineReducers } from 'redux';
import apiReducer from './apiReducer';
import authReducer from './authReducers';
import titleReducer from './titleReducer';

const rootReducer = combineReducers({
	api: apiReducer,
	authentication: authReducer,
	title: titleReducer,
});

export default rootReducer;
