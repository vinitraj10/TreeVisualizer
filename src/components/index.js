import React, { Component } from 'react';
import { connect } from 'react-redux';
import TraversedList from '../containers/traversedlist';
import Options from '../containers/options';
import TreeDiagram from '../containers/treediagram';
import { createTree } from '../actions';
import '../../dist/css/main.css';

class App extends Component {
	componentWillMount() {
		this.props.createTree();
	}
	render() {
		return (
			<div className="row">
				<div className="col-6">
					<TreeDiagram />
				</div>
				<div className="col-6">
					<div className="row">
						<div className="col-12">
							<Options />
						</div>
						<div className="col-12">
							<h2 className="heading">Order Of Traversal</h2>
							<TraversedList />
						</div>
					</div>
				</div>
			</div>
		);
	}
}


// createTree is single action to be connected in  
export default connect(null, { createTree })(App);
