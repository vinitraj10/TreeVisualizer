import {
	TREE_TRAVERSAL,
	CLEAR_OUTPUT
} from '../actions/types';

const initialState = {
	//rootNode:null,
	traversedList : []
}


export default function(state=initialState,action){
	switch(action.type){
		case TREE_TRAVERSAL:
			return {...state,traversedList:[...state.traversedList,action.payload]};
			break;
		case CLEAR_OUTPUT:
			return {...state,traversedList:[]}
			break;
	}
	return state;
}