class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

class Tree {
	constructor(rootval) {
		/*
			Tree root node initialization so,
			that it can be easily traversed.
		*/
		this.root = new Node(rootval); 
	}
}

export { Tree, Node };
