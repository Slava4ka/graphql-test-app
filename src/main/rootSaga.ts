import {all, fork} from 'redux-saga/effects';
import episodesSaga from 'library/common/sagas/episodes.saga';

export default function* rootSaga() {
	yield all([
		fork(episodesSaga),
	]);
}
