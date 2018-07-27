import React,{Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { CSSTransition, TransitionGroup } from "react-transition-group";


class Traversed extends Component {
	render(){
		const {list} = this.props.traversed;
		if(list.length>0){
			return (
				<div className="col-12">
					<TransitionGroup component={null}>
						{list.map((val, index) => (
							<CSSTransition key={index} timeout={500} classNames="fade">	
								<span key={index} className="node">{val}</span>
							</CSSTransition>	
						))}
					</TransitionGroup>
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