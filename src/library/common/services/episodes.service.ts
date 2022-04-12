import {axiosApi} from 'library/utils/fetch';
import { EpisodesResponse } from '../types/episodes.d';

const getEpisodes = (page: number) => axiosApi
	.get<EpisodesResponse>('episode/', {params: {page}});

export default {
	getEpisodes,
};
