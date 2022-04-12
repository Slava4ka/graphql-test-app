import {ActionType, createReducer} from 'typesafe-actions';
import * as actions from 'library/common/actions/episode.action';
import { Episode } from '../types/episodes.d';

export type EpisodesActions = ActionType<typeof actions>;

export type EpisodesState = Readonly<{
    isPending: boolean;
    count: number,
    pages: number,
    currentPage: number,
    episodes: Array<Episode>,
}>

const initialState: EpisodesState = {
	isPending: true,
	count: 1,
	pages: 1,
	currentPage: 1,
	episodes: [],
};

export default createReducer<EpisodesState, EpisodesActions>(initialState)
	.handleAction(actions.getEpisodesAsync.request, (state) => ({
		...state,
		isPending: true,
	}))
	.handleAction(actions.getEpisodesAsync.success, (state, action) => ({
		...state,
		isPending: false,
		count: action.payload.info?.count || state.count,
		pages: action.payload.info?.pages || state.pages,
		currentPage: state.currentPage + 1,
		episodes: [...state.episodes, ...action.payload.results],
	}))
	.handleAction(actions.getEpisodesAsync.failure, (state) => ({
		...state,
		isPending: false,
	}));
