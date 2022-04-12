import React from 'react';
import {
	Card as MaterialCard,
	CardMedia,
	CardContent,
	Typography,
} from '@mui/material';

import cardStyles from 'library/utils/cardStyles';

interface ICharacterCard {
    name?: string;
    image?: string;
}

const CharacterCard = ({name, image}: ICharacterCard) => {
	const classes = cardStyles();

	return (
		<MaterialCard
			sx={{
				minHeight: '376px',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<CardMedia
				className={classes.media}
				image={image}
				title={name}
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
					}}
				>
					{name}
				</Typography>
			</CardContent>
		</MaterialCard>
	);
};

export default CharacterCard;
