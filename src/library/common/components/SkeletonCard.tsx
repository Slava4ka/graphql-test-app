import React from 'react';
import {
	Card as MaterialCard, CardContent, Skeleton, Typography,
} from '@mui/material';

import cardStyles from 'library/utils/cardStyles';

const SkeletonCard = () => {
	const classes = cardStyles();

	return (
		<MaterialCard
			sx={{
				minHeight: '376px',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Skeleton
				variant="rectangular"
				className={classes.media}
			/>
			<CardContent sx={{
				p: 2, flexGrow: 1, display: 'flex', justifyContent: 'center',
			}}
			>
				<Typography
					sx={{
						margin: 'auto',
						fontFamily: 'GrapeNuts',
						fontSize: '2rem',
						textAlign: 'center',
						flexGrow: 1,
					}}
				>
					<Skeleton animation="wave" />
				</Typography>
			</CardContent>
		</MaterialCard>
	);
};

export default SkeletonCard;
