import {TREE_TRAVERSAL} from '../actions/types';

const initialState = {
	//rootNode:null,
	traversedList : null
}


export default function(state=initialState,action){
	switch(action.type){
		case TREE_TRAVERSAL:
			return {...state,traversedList:action.payload};
			break;
	}
	return state;
}