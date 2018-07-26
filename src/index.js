//react imports
import React from 'react';
import { render } from 'react-dom';
// redux imports
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';

import reducers from './reducers';

import ReduxThunk from "redux-thunk";

import MainApp from './components';

const store = applyMiddleware(ReduxThunk)(createStore);

render(
	<Provider store={store(reducers)}>
		<MainApp/>
	</Provider>
	,document.getElementById('root'));