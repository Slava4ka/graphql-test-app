import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@mui/material/Link';

interface ITitle {
    name: string;
}

const Title = ({name}: ITitle) => (
	<Link
		component={RouterLink}
		underline="none"
		to="/main"
		sx={{
			margin: 'auto',
			fontWeight: 900,
			fontSize: '1.5rem',
		}}
	>
		{name}
	</Link>
);

export default Title;
