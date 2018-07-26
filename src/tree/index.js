import TreeNode from './treenode';

class Tree {
	constructor(rootval) {
		/*
			Tree root node initialization so,
			that it can be easily traversed.
		*/
		this.root = new TreeNode(rootval); 
	}
}

export default Tree;