import {createSelector} from 'reselect';
import { RootState } from 'main/rootReducer';

export const getCurrentPage = (state: RootState) => state.episodes.currentPage;
export const getPagesCount = (state: RootState) => state.episodes.pages;

export const hasMoreEpisodes = createSelector(
	(state: RootState) => state.episodes.count,
	(state: RootState) => state.episodes.episodes,
	(state: RootState) => state.episodes.isPending,
	(count, episodes, isPending) => !isPending && episodes.length < count,
);
