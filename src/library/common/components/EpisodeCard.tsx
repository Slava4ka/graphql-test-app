import {
	Card, CardContent, Grid, Stack, Typography,
} from '@mui/material';
import React from 'react';
import { Episode } from '../types/episodes.d';

interface IEpisodeCard extends Partial<Episode> {}

const EpisodeCard = ({name, episode, air_date}: IEpisodeCard) => (
	<Card>
		<CardContent>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={12} md={5} lg={6} xl={6}>
					<Stack direction="column">
						<Typography
							variant="h5"
							sx={{color: (theme) => theme.palette.grey[600]}}
						>
							Name

						</Typography>
						<Typography variant="h4" noWrap>{name}</Typography>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
					<Stack direction="column">
						<Typography
							variant="h5"
							sx={{color: (theme) => theme.palette.grey[600]}}
						>
							Episode

						</Typography>
						<Typography variant="h4" noWrap>{episode}</Typography>
					</Stack>
				</Grid>
				<Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
					<Stack direction="column">
						<Typography
							variant="h5"
							sx={{color: (theme) => theme.palette.grey[600]}}
						>
							Release date

						</Typography>
						<Typography variant="h4" noWrap>{air_date}</Typography>
					</Stack>
				</Grid>
			</Grid>
		</CardContent>
	</Card>
);

export default EpisodeCard;
