import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import App from 'main/App';
import client from 'library/common/services/client';

import {sagaMiddleware, store} from './main/rootReducer';
import rootSaga from './main/rootSaga';
import reportWebVitals from './reportWebVitals';

import './resources/styles/index.css';

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<ApolloProvider client={client}>
					<App />
				</ApolloProvider>
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root'),
);

reportWebVitals();
