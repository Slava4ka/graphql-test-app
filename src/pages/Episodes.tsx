import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Container, CircularProgress, Grid,
} from '@mui/material';
import {RootState} from 'main/rootReducer';
import {getEpisodesAsync} from 'library/common/actions/episode.action';
import RnMLoader from 'library/common/components/RnMLoader';
import InfiniteScroll from 'react-infinite-scroller';
import { hasMoreEpisodes } from 'library/common/selectors/episodes.selector';

import EpisodeCard from 'library/common/components/EpisodeCard';

// interface IEpisodes {}

const Episodes = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getEpisodesAsync.request(1));
	}, []);

	const {isPending} = useSelector((state: RootState) => state.episodes);
	const {episodes} = useSelector((state: RootState) => state.episodes);
	const hasMore = useSelector(hasMoreEpisodes);

	const getEpisodes = (page: number) => dispatch(getEpisodesAsync.request(page));

	if (isPending && episodes.length === 0) {
		return (<RnMLoader open />);
	}

	return (
		<Container>
			<InfiniteScroll
				loadMore={getEpisodes}
				pageStart={1}
				hasMore={hasMore}
				loader={<CircularProgress key="loader" />}
			>
				<Grid container spacing={2} sx={{p: {xs: 0, md: 3}}}>
					{
						episodes.map((episode) => (
							<Grid
								key={episode.id}
								item
								xs={12}

							>
								<EpisodeCard
									name={episode.name}
									episode={episode.episode}
									air_date={episode.air_date}
								/>
							</Grid>
						))
					}
				</Grid>
			</InfiniteScroll>
		</Container>
	);
};

export default Episodes;
