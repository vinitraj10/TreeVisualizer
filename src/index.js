//react imports
import React from 'react';
import { render } from 'react-dom';
// redux imports
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducers from './reducers';

import MainApp from './components';


render(
	<Provider store={createStore(reducers)}>
		<MainApp/>
	</Provider>
	,document.getElementById('root'));