import React from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

import DashboardNavbar from './DashboardNavbar';
import { APP_BAR_DESKTOP, APP_BAR_MOBILE } from '../constants/sizes.constant';

const RootStyle = styled('div')({
	display: 'flex',
	minHeight: '100%',
	width: '100%',
});

const MainStyle = styled('div')(({ theme }) => ({
	flexGrow: 1,
	minHeight: '100%',
	paddingBottom: theme.spacing(10),
	paddingTop: APP_BAR_MOBILE + 80,
	[theme.breakpoints.up('lg')]: {
		paddingTop: APP_BAR_DESKTOP + 80,
		paddingLeft: theme.spacing(2),
		paddingRight: theme.spacing(2),
	},
}));

const DashboardLayout = () => (
	<RootStyle>
		<DashboardNavbar />
		<MainStyle>
			<Outlet />
		</MainStyle>
	</RootStyle>
);

export default DashboardLayout;
