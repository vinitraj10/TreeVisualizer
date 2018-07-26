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
  		if(selectedOption){
  			switch(selectedOption.value){
  				case 'BFS':
  					this.props.bfs(rootNode);
  					break;
  				case 'PREORDER':
  					this.props.preOrder(rootNode);
  					break;
  				case 'INORDER':
  					this.props.inOrder(rootNode);
  					break;
  				case 'POSTORDER':
  					this.props.postOrder(rootNode);
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
		const {traversedList} = this.props.traversed;
		const length = traversedList.length;
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
		traversed : state.traversed
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