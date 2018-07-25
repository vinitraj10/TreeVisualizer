import {combineReducers} from 'redux';
import tree from './tree';

const rootReducer = combineReducers({
	root:tree,
})

export default rootReducer;