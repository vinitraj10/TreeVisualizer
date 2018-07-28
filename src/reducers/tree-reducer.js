import { SET_ROOTNODE } from '../actions/types';

const initialState = {
	rootNode: null
};

export default function (state = initialState, action) {
	switch (action.type) {
		case SET_ROOTNODE:
			return { ...state, rootNode: action.payload };
	default:
		return state;
	}
}
