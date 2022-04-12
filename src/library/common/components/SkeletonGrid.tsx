import React from 'react';
import {Grid} from '@mui/material';

import {countOfTile} from 'library/utils/breakpointsValues';
import {getCountOfTile, getWindowSize} from 'library/utils/itemsCountCalc';

import SkeletonCard from './SkeletonCard';

const SkeletonGrid = () => (
	<Grid container spacing={2} sx={{padding: {xs: 0, md: '0 24px 24px 24px'}}}>
		{
			Array.from({ length: getCountOfTile(getWindowSize())}, (_, i) => i).map((value) => (
				<Grid
					key={value}
					item
					xs={countOfTile.xs.gridSize}
					sm={countOfTile.sm.gridSize}
					md={countOfTile.md.gridSize}
					lg={countOfTile.lg.gridSize}
					xl={countOfTile.xl.gridSize}
				>
					<SkeletonCard />
				</Grid>
			))
		}
	</Grid>
);

export default SkeletonGrid;
