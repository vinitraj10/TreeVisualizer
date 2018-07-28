import React, { Component } from 'react';
import Tree from 'react-tree-graph';
import { connect } from 'react-redux';
import { updateDiagram } from '../actions';


class TreeDiagram extends Component {
	constructor() {
		super();
		this.traverseSubTree = this.traverseSubTree.bind(this);
	}
	componentWillUpdate(nextProps) {
		const { list } = nextProps.traversed;
		const { data } = nextProps;
		if (list.length >= 1) this.traverseTree(list[list.length - 1], data);
	}
	traverseTree(node, data) {
		if (node === data.name) {
			data.circleProps = { fill: 'blue' };
			this.props.updateDiagram(data);
		}
		else {
			const subTree = this.traverseSubTree(node, data);
			this.props.updateDiagram(subTree);
		}
	}
	traverseSubTree(node, data) {
		const children = data.children;
		children.forEach((obj) => {
			if (obj.name === node) {
				obj.circleProps = { fill: 'blue' };
				return;
			}
			else if (obj.hasOwnProperty('children')) {
				this.traverseSubTree(node, obj);
			}
		});
		return data;
	}
	render() {
		const { data } = this.props;
		const bool = true;
		//console.log(data);
		return (
			<Tree 
				data={data} 
				height={400} 
				width={400} 
				svgProps={{ 
					transform: 'rotate(90)',
					className: 'custom'
				}}
				textProps={{
					transform: 'rotate(270)'
				}}
				animated={bool}
			/>
		);
	}
}

// mapping the redux state to the component props.
function mapStateToProps(state) {
	return {
		tree: state.tree,
		traversed: state.traversed,
		data: state.dgmData.data
	};
}

//updateDiagram is a single action to be connected in
export default connect(mapStateToProps, { updateDiagram })(TreeDiagram);
