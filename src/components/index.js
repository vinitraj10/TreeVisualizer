import React,{Component} from 'react';
import Tree from '../tree';
import TreeNode from '../tree/treenode';

export default class MainApp extends Component {
	render(){
		const tree = new Tree(34);
		tree.root.left  = new TreeNode(23);
		tree.root.right = new TreeNode(92);
		tree.root.left.left = new TreeNode(12);
		tree.root.left.right = new TreeNode(4);
		tree.root.left.right.left = new TreeNode(16);
		tree.root.left.right.right = new TreeNode(9);
		return (
			<div>
				<button onClick={()=> tree.bfs(tree.root)}>BFS</button>
				<button onClick={()=> tree.preorder(tree.root)}>Preorder</button>
				<button onClick={()=> tree.inorder(tree.root)}>Inorder</button>
				<button onClick={()=> tree.postorder(tree.root)}>Postorder</button>
			</div>
		);
	}
}