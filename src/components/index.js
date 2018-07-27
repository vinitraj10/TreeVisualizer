import '../../dist/css/main.css';
import React,{Component} from 'react';
import Traversed from '../containers/traversed';
import Options from '../containers/options';
import Livetree from '../containers/livetree';
import {connect} from 'react-redux';
import {createTree} from '../actions';

class MainApp extends Component {
	componentWillMount(){
		this.props.createTree();
	}
	render(){
		return (
			<div className = "row">
				<div className = "col-6">
					<Livetree/>
				</div>
				<div className = "col-6">
					<div className="row">
						<div className="col-12">
							<Options/>
						</div>
						<div className="col-12">
							<Traversed/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}


export default connect(null,{createTree})(MainApp);