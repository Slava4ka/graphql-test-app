import React from 'react';
import { Backdrop } from '@mui/material';
import logo from 'resources/images/giphy.gif';

interface IRnMLoader {
	open: boolean;
}

const RnMLoader = ({open}: IRnMLoader) => (
	<Backdrop
		sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
		open={open}
	>
		<img src={logo} alt="loading..." />
	</Backdrop>
);

export default RnMLoader;
