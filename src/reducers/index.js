import {combineReducers} from 'redux';
import traversedReducer from './traversed-reducer';
import treeReducer from './tree-reducer';
import diagramReducer from './diagram-reducer';

const rootReducer = combineReducers({
	tree:treeReducer,
	traversed:traversedReducer,
	dgmData:diagramReducer
})

export default rootReducer;