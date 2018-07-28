import { Tree, Node } from '../tree';
import {
	TREE_TRAVERSAL,
	SET_ROOTNODE,
	SET_DATA,
	RESET
} from './types';

export function createTree() {
	// Tree Intialized
	const tree = new Tree('34'); 
	// Insertion of nodes in tree
	tree.root.left = new Node('23'); 
	tree.root.right = new Node('92');
	tree.root.left.left = new Node('12');
	tree.root.left.right = new Node('04');
	tree.root.left.right.left = new Node('16');
	tree.root.left.right.right = new Node('09');
	return { type: SET_ROOTNODE, payload: tree.root };
}


export function preOrder(rootNode) {
	if (!rootNode) return;
	const stack = [];
	const traversed = []; // Visited nodes will be pushed in it
	let node = null;
	stack.push(rootNode);
	while (stack.length > 0) {
		node = stack.pop();
		traversed.push(node.val);
		if (node.right) stack.push(node.right);
		if (node.left) stack.push(node.left);
	}
	/* 
		Returning dispatch function
		to update the traversed list
		state.
	*/
	return (dispatch) => {
		traversed.forEach((val, index) => {
			setTimeout(() => {
				// dispatching payload at every 1.5s 
				dispatch({ type: TREE_TRAVERSAL, payload: val });
			}, 2000 * index);		
		});		
	};
}

export function inOrder(rootNode) {
	if (!rootNode) return;
	const stack = [];
	const traversed = [];
	let node = rootNode;
	while (stack.length > 0 || node) {
		if (node) {
			stack.push(node);
			node = node.left;
		}
		else {
			node = stack.pop();
			traversed.push(node.val);
			node = node.right;
		}
	}
	return (dispatch) => {
		traversed.forEach((val, index) => {
			/* 
				To change the state of traversed list 
				at every 2 secs so that animation can
				work. 
			*/
			setTimeout(() => {
				dispatch({ type: TREE_TRAVERSAL, payload: val });
			}, 2000 * index);
		});	
	};
}

export function postOrder(rootNode) {
	if (!rootNode) return;
	const visited = new Set();
	const stack = [];
	const traversed = [];
	let node = rootNode;
	while (stack.length > 0 || node) {
		if (node) {
			stack.push(node);
			node = node.left;
		}
		else {
			node = stack.pop();
			if (node.right && !(visited.has(node.right))) {
				stack.push(node);
				node = node.right;
			}
			else {
				visited.add(node);
				traversed.push(node.val);
				node = null;
			}
		}
	}
	return (dispatch) => {
		traversed.forEach((val, index) => {
			setTimeout(() => {
				dispatch({ type: TREE_TRAVERSAL, payload: val });
			}, 2000 * index);			
		});		
	};
}

export function bfs(rootNode) {
	const queue = []; // A list which will work as Queue data structure
	const traversed = [];
	let node = null; // A variable which will hold popped element of Queue
	queue.push(rootNode);
	while (queue.length > 0) {
		node = queue.shift(); // Popping the first element from queue
		traversed.push(node.val);
		if (node.left) queue.push(node.left); // Pushing Left child
		if (node.right) queue.push(node.right); // Pushing right child
	}
	return (dispatch) => {
		traversed.forEach((val, index) => {
			setTimeout(() => {
				dispatch({ type: TREE_TRAVERSAL, payload: val });
			}, 2000 * index);
		});
	};
}

export function clearOutput() {
	return (dispatch) => {
		/*
			Clearing the Components
			State,Show that it can 
			be reused normally.
		*/
		dispatch({ type: RESET });
	};
}

export function updateDiagram(data) {
	return (dispatch) => {
		/*
			Updating the State of 
			tree-diagram from data
			parameter passed from
			livetree Compoenent
		*/
		dispatch({ type: SET_DATA, payload: data });
	};	
}
