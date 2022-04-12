import React from 'react';
import {Container, Grid} from '@mui/material';
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
import { Character, RickAndMortyData } from 'library/common/types/rickAndMorty.d';
import InfiniteScroll from 'react-infinite-scroller';
import { countOfTile } from 'library/utils/breakpointsValues';
import CharacterCard from 'library/common/components/CharacterCard';
import SkeletonGrid from 'library/common/components/SkeletonGrid';
import RnMLoader from 'library/common/components/RnMLoader';

const GetCharacters = loader('../library/common/services/GetCharacters.graphql');

const RickAndMorty = () => {
	const {
		loading, data, fetchMore, error,
	} = useQuery<RickAndMortyData>(GetCharacters, { variables: { page: 1 } });

	const dataLength = data?.characters.info.count;

	// For infinite scroll
	const scrollEnd = (page: number) => fetchMore({
		variables: {page},
		updateQuery: (prev, { fetchMoreResult }) => {
			if (!fetchMoreResult) return prev;
			return {
				characters: {
					__typename: 'Characters',
					info: fetchMoreResult.characters.info,
					results: [
						...prev.characters.results,
						...fetchMoreResult.characters.results,
					],
				},
			};
		},
	});

	if (error) {
		return <div>Error</div>;
	}

	if (loading) {
		return (<RnMLoader open />);
	}

	return (
		<Container>
			<InfiniteScroll
				loadMore={scrollEnd}
				pageStart={1}
				hasMore={dataLength !== data?.characters?.results?.length}
				loader={<SkeletonGrid key="loader" />}
			>
				<Grid container spacing={2} sx={{p: {xs: 0, md: 3}}}>
					{
						data?.characters?.results?.map((result: Character) => (
							<Grid
								key={result.id}
								item
								xs={countOfTile.xs.gridSize}
								sm={countOfTile.sm.gridSize}
								md={countOfTile.md.gridSize}
								lg={countOfTile.lg.gridSize}
								xl={countOfTile.xl.gridSize}
							>
								<CharacterCard
									image={result.image}
									name={result.name}
								/>
							</Grid>
						))
					}
				</Grid>
			</InfiniteScroll>
		</Container>
	);
};

export default RickAndMorty;
