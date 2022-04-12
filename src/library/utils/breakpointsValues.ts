import {Breakpoint} from '@mui/system/createTheme/createBreakpoints';

export const breakpointsValues: { [key in Breakpoint]: number } = {
	xs: 0,
	sm: 600,
	md: 900,
	lg: 1200,
	xl: 1900,
};

export const countOfTile: { [key in Breakpoint]: {gridSize: number, count: number} } = {
	xs: {gridSize: 12, count: 1},
	sm: {gridSize: 6, count: 2},
	md: {gridSize: 4, count: 3},
	lg: {gridSize: 3, count: 4},
	xl: {gridSize: 3, count: 4},
};
