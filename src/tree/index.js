import TreeNode from './treenode';

class Tree {
	constructor(rootval) {
		/*
			Tree root node initialization so,
			that it can be easily traversed.
		*/
		this.root = new TreeNode(rootval); 
	}
	preorder(rootNode){
		/*
			Base condition of recursion,
			if no node to visit simply 
			return.
		*/
		if(!rootNode) return; 
		console.log(rootNode.val);
		this.preorder(rootNode.left);
		this.preorder(rootNode.right);
	}
	inorder(rootNode){
		/*
			base condition of recursion,
			if no node to visit simply 
			return.
		*/
		if(!rootNode) return;
		this.inorder(rootNode.left)
		console.log(rootNode.val);
		this.inorder(rootNode.right);
	}
	postorder(rootNode){
		/*
			base condition of recursion,
			if no node to visit simply 
			return.
		*/
		if(!rootNode) return;
		this.postorder(rootNode.left);
		this.postorder(rootNode.right);
		console.log(rootNode.val);
	}
	bfs(){
		let queue = []; // A list which will work as Queue data structure
		let node = null; // A variable which will hold popped element of Queue
		queue.push(this.root);
		while (queue.length > 0){
			node = queue.shift(); // Popping the first element from queue
			console.log(node.val);
			if (node.left)
				queue.push(node.left); // Pushing Left child
			if (node.right)
				queue.push(node.right); // Pushing right child
			//console.log(queue);
		}
	}

}

export default Tree;