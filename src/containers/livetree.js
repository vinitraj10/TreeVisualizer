import React,{Component} from 'react';
import Tree from 'react-tree-graph';
import {connect} from 'react-redux';
import {traverseTree} from '../actions';


class Livetree extends Component {
	componentWillUpdate(nextProps){
		const {list} = nextProps.traversed;
		const {data} = nextProps;
		if(list.length>=1)
			nextProps.traverseTree(list[list.length-1],data);
	}
	render(){
		const {data} = this.props;
		//console.log(data);
		return(
			<Tree
		      data = {data}
		      height={400}
		      width={400}
		      svgProps={{
		        transform: "rotate(90)",
		        className:"custom"
		      }}
		      textProps={{
		        transform: "rotate(270)"
		      }}
		      animated={true}
		    />
		);
	}
}

function mapStateToProps(state){
	return {
		tree : state.tree,
		traversed : state.traversed,
		data : state.dgmData.data
	}
}
export default connect(mapStateToProps,{traverseTree})(Livetree);