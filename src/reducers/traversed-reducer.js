import {
	TREE_TRAVERSAL,
	RESET
} from '../actions/types';

const initialState = {
	list: []
};


export default function (state = initialState, action) {
	switch (action.type) {
		case TREE_TRAVERSAL:
			return { ...state, list: [...state.list, action.payload] };
		case RESET:
			return { ...state, list: [] };
		default:
			return state;
	}
}
