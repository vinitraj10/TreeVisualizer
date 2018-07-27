import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Select from 'react-select';
import {
	createTree,
	preOrder,
	inOrder,
	postOrder,
	bfs,
	clearOutput
} from '../actions';

const options = [
	{value:'BFS',label:'Level-Order'},
	{value:'PREORDER',label:'Pre-Order'},
	{value:'POSTORDER',label:'Post-Order'},
	{value:'INORDER',label:'In-Order'}

]

class Options extends Component {
	constructor (props) {
		super(props);
		this.state = {
			selectedOption: null,
		};
		this.handleChange = this.handleChange.bind(this);
		this.traversal = this.traversal.bind(this);
		this.renderButton = this.renderButton.bind(this);
	}

	handleChange (selectedOption) {
    	this.setState({ selectedOption});
  	}

  	traversal () {
  		this.props.clearOutput();
  		const {selectedOption} = this.state;
  		const {rootNode} = this.props.tree;
  		const {data} = this.props;
  		if(selectedOption){
  			switch(selectedOption.value){
  				case 'BFS':
  					this.props.bfs(rootNode,data);
  					break;
  				case 'PREORDER':
  					this.props.preOrder(rootNode,data);
  					break;
  				case 'INORDER':
  					this.props.inOrder(rootNode,data);
  					break;
  				case 'POSTORDER':
  					this.props.postOrder(rootNode,data);
  					break;
  			}
  		}
  		else{
  			console.log("Render error");
  		}
  	}
  	renderButton(length){
  		if(length==0 || length==7){
  			return(
  				<button className="btn play" onClick={this.traversal}><span>Play</span></button>
  			)
  		}
  		return(
  			<button className="btn play" disabled><span>Play</span></button>
  		)
  	}
	render(){
		const {rootNode} = this.props.tree;
		const {list} = this.props.traversed;
		const length = list.length;
		return (
			<div>
				 <Select
			        value={this.state.selectedOption}
			        onChange={this.handleChange}
			        options={options}
			    />
			    {this.renderButton(length)}
		    </div>
		);	
	}
}

/*
	This function map the global 
	state values into the compo-
	nent props.
	
*/

function mapStateToProps(state){
	return {
		tree : state.tree,
		traversed : state.traversed,
		data : state.dgmData.data
	};
}

/*
	this function map the actions or
	methods into the component props.
	
*/

function mapDispatchToProps(dispatch){
	return bindActionCreators({
			createTree,
			preOrder,
			inOrder,
			postOrder,
			bfs,
			clearOutput
		}, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Options);