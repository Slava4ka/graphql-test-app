import React, { useCallback, useEffect, useState } from 'react';
import { alpha, styled } from '@mui/material/styles';
import {
	Box,
	AppBar,
	Toolbar,
	Container,
	IconButton,
	Tooltip,
	Stack,
} from '@mui/material';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import RickIcon from 'resources/icons/RickIcon';
import styles from 'resources/styles/rickIcon.module.css';
import MortyIcon from 'resources/icons/MortyIcon';
import Title from './Title';
import { APP_BAR_DESKTOP, APP_BAR_MOBILE } from '../constants/sizes.constant';

const RootStyle = styled(AppBar)(() => ({
	boxShadow: 'none',
	backdropFilter: 'blur(6px)',
	WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
	transition: 'background .2s ease .1s, padding .5s ease',
	position: 'fixed',
	width: '100%',
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
	minHeight: APP_BAR_MOBILE,
	[theme.breakpoints.up('lg')]: {
		minHeight: APP_BAR_DESKTOP,
	},
}));

const links = [
	{
		title: "Персонажи мультфильма 'Рик и Морти' by graphql",
		component: <RickIcon width={50} height={50} />,
		link: 'rickAndMorty',
	},
	{
		title: "Эпизоды мультфильма 'Рик и Морти' by REST API",
		component: <MortyIcon width={50} height={50} />,
		link: 'episodes',
	},
];

const DashboardNavbar = () => {
	const [navbarExpanded, setNavbarExpanded] = useState(true);

	const handleScroll = useCallback(
		_.debounce(() => {
			if (window.pageYOffset > 50) {
				setNavbarExpanded(false);
			} else if (window.pageYOffset < 50) {
				setNavbarExpanded(true);
			}
		}, 250),
		[],
	);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<RootStyle sx={{
			paddingTop: navbarExpanded ? 3 : 0.5,
			paddingBottom: navbarExpanded ? 3 : 0.5,
			backgroundColor: (theme) => (navbarExpanded
				? alpha(theme.palette.background.default, 0.72)
				: alpha(theme.palette.primary.main, 0.32)),
		}}
		>
			<ToolbarStyle>
				<Container sx={{display: 'flex', flexDirection: 'row'}} disableGutters>
					<Title name="OV" />
					<Box sx={{ flexGrow: 1 }} />
					<Stack direction="row" spacing={1}>
						{
							links.map((link) => (
								<Tooltip
									title={(
										<span style={{fontFamily: 'sans-serif', fontSize: '12px'}}>
											{link.title}
										</span>
									)}
									key={link.link}
								>
									<IconButton
										component={Link}
										size="small"
										to={link.link}
										className={styles.icon}
									>
										{link.component}
									</IconButton>
								</Tooltip>
							))
						}
					</Stack>
				</Container>
			</ToolbarStyle>
		</RootStyle>
	);
};

export default DashboardNavbar;
