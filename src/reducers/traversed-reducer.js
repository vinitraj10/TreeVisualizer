import {
	TREE_TRAVERSAL,
	RESET
} from '../actions/types';

const initialState = {
	//rootNode:null,
	list : []
}


export default function(state=initialState,action){
	switch(action.type){
		case TREE_TRAVERSAL:
			return {...state,list:[...state.list,action.payload]};
			break;
		case RESET:
			return {...state,list:[]}
			break;
	}
	return state;
}