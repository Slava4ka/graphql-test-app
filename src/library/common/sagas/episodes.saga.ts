import { AxiosResponse } from 'axios';
import {
	call, put, takeLatest, select,
} from 'redux-saga/effects';
import * as episodesActions from 'library/common/actions/episode.action';
import episodesServices from 'library/common/services/episodes.service';
import episodesActionTypes from '../constants/episode.constant';
import { getPagesCount } from '../selectors/episodes.selector';
import { EpisodesResponse } from '../types/episodes.d';

function* getEpisodesSaga(action: ReturnType<typeof episodesActions.getEpisodesAsync.request>) {
	try {
		const pagesCount: number = yield select(getPagesCount);

		if (action.payload <= pagesCount) {
			const res: AxiosResponse<EpisodesResponse> = yield call(episodesServices.getEpisodes, action.payload);
			yield put(episodesActions.getEpisodesAsync.success(res.data));
		}
	} catch (error) {
		yield put(episodesActions.getEpisodesAsync.failure());
	}
}

export default function* watchCommonLayout() {
	yield takeLatest(episodesActionTypes.GET_EPISODES_REQUEST, getEpisodesSaga);
}
