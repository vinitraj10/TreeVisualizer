import {combineReducers} from 'redux';
import traversedReducer from './traversed-reducer';
import treeReducer from './tree-reducer';

const rootReducer = combineReducers({
	tree:treeReducer,
	traversed:traversedReducer,
})

export default rootReducer;