import React,{Component} from 'react';
import Tree from '../tree';
import TreeNode from '../tree/treenode';

export default class App extends Component {
	componentWillMount(){
		const tree = new Tree(34);
		tree.root.left  = new TreeNode(23);
		tree.root.right = new TreeNode(92);
		tree.root.left.left = new TreeNode(12);
		tree.root.left.right = new TreeNode(4);
		tree.root.left.right.left = new TreeNode(16);
		tree.root.left.right.right = new TreeNode(9);
		console.log("Preorder Traversal:-");
		tree.preorder(tree.root);
		console.log("Inorder Traversal:-");
		tree.inorder(tree.root);
		console.log("Postrder Traversal:-");
		tree.postorder(tree.root);
		console.log("Bfs Traversal:-");
		tree.bfs();
	}
	render(){
		return (
			<div>Traversal</div>
		);
	}
}