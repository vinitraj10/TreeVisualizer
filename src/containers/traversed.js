import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Traversed extends Component {
	renderEach(current,index){
		return(
			<span key={index} className="node">{current}</span>
		);
	}
	render(){
		const {traversedList} = this.props.traversed;
		if(traversedList){
			return (
				<div className="col-12">
					{traversedList.map(this.renderEach.bind(this))}
				</div>
			);
		}
		return(
			<div></div>
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
		traversed : state.traversed 
	}
}


// Finally connecting it all together.
export default connect (mapStateToProps)(Traversed);