import Tree from '../tree';
import TreeNode from '../tree/treenode';
import {
	TREE_TRAVERSAL,
	SET_ROOTNODE,
	SET_DATA,
	RESET
} from './types';

export function createTree(){
	const tree = new Tree('34');
	tree.root.left  = new TreeNode('23');
	tree.root.right = new TreeNode('92');
	tree.root.left.left = new TreeNode('12');
	tree.root.left.right = new TreeNode('04');
	tree.root.left.right.left = new TreeNode('16');
	tree.root.left.right.right = new TreeNode('09');
	return {type:SET_ROOTNODE,payload:tree.root};
}


export function preOrder(rootNode) {
	if (!rootNode) return;
	let stack = [];
	let node = null
	let traversed = [];
	stack.push(rootNode);
	while (stack.length > 0) {
		node = stack.pop();
		traversed.push(node.val);
		if(node.right) stack.push(node.right);
		if(node.left) stack.push(node.left);
	}

	return (dispatch) => {
		traversed.forEach((val,index)=>{
			setTimeout(()=>{
				dispatch({type:TREE_TRAVERSAL,payload:val});
			},1500*index);
			
		});
		
	}
}

export function inOrder(rootNode) {
	if(!rootNode) return;
	let stack = [];
	let node = rootNode;
	let traversed = [];
	while(stack.length>0 || node){
		if(node){
			stack.push(node);
			node = node.left;
		}
		else{
			node = stack.pop();
			traversed.push(node.val);
			node = node.right;
		}
	}
	return (dispatch) => {
		traversed.forEach((val,index)=>{
			setTimeout(()=>{
				dispatch({type:TREE_TRAVERSAL,payload:val});
			},2000*index);
			
		});
		
	}
}

export function postOrder(rootNode) {
	if(!rootNode) return;
	let visited = new Set();
	let stack = [];
	let node = rootNode;
	let traversed = [];
	while (stack.length>0 || node){
		if(node){
			stack.push(node);
			node = node.left;
		}
		else{
			node = stack.pop();
			if(node.right && !(visited.has(node.right))){
				stack.push(node);
				node = node.right;
			}
			else{
				visited.add(node);
				traversed.push(node.val);
				node=null;
			}
		}
	}
	return (dispatch) => {
		traversed.forEach((val,index)=>{
			setTimeout(()=>{
				dispatch({type:TREE_TRAVERSAL,payload:val});
			},2000*index);
			
		});
		
	}
}

export function bfs(rootNode){
	let queue = []; // A list which will work as Queue data structure
	let node = null; // A variable which will hold popped element of Queue
	let traversed = [];
	queue.push(rootNode);
	while (queue.length > 0){
		node = queue.shift(); // Popping the first element from queue
		traversed.push(node.val);
		if (node.left)
			queue.push(node.left); // Pushing Left child
		if (node.right)
			queue.push(node.right); // Pushing right child
			//console.log(queue);
	}
	return (dispatch) => {
		traversed.forEach((val,index)=>{
			setTimeout(()=>{
				dispatch({type:TREE_TRAVERSAL,payload:val});
			},2000*index);
			
		});
		
	}
}

export function clearOutput(){
	return (dispatch) => {
		dispatch({type:RESET});
	}
}

export function traverseTree(node,data){
	return (dispatch) => {
		if(node==data.name){
			data.circleProps = { fill: "blue" };
			dispatch({type:SET_DATA,payload:data});
		}
		else{

			let x=data.children;
			x.forEach((obj,index)=>{
				if(obj.name==node){
					obj.circleProps = {fill:"blue"};
				}
			});
			dispatch({type:SET_DATA,payload:data});	
		}
		
	}
}