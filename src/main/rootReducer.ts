import {applyMiddleware, combineReducers, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {batchDispatchMiddleware, enableBatching} from 'redux-batched-actions';
import {composeWithDevTools} from 'redux-devtools-extension';
import {StateType} from 'typesafe-actions';

import episodesReducer from 'library/common/reducers/episodes.reducer';

const createRootReducer = combineReducers({
	episodes: episodesReducer,
});

const rootReducer = createRootReducer;
export const sagaMiddleware = createSagaMiddleware();

export type RootState = StateType<typeof rootReducer>;

export const store = createStore(
	enableBatching(rootReducer),
	composeWithDevTools(
		applyMiddleware(
			sagaMiddleware,
			batchDispatchMiddleware,
		),
	),
);

export default store;
