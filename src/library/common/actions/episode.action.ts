import {createAsyncAction} from 'typesafe-actions';
import episodesActionTypes from '../constants/episode.constant';
import { EpisodesResponse } from '../types/episodes.d';

// eslint-disable-next-line import/prefer-default-export
export const getEpisodesAsync = createAsyncAction(
	episodesActionTypes.GET_EPISODES_REQUEST,
	episodesActionTypes.GET_EPISODES_SUCCESS,
	episodesActionTypes.GET_EPISODES_FAILURE,
)<number, EpisodesResponse, undefined>();
