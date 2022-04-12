import {Breakpoint} from '@mui/system/createTheme/createBreakpoints';
import {breakpointsValues, countOfTile} from './breakpointsValues';

const sizeToCount: { [key in Breakpoint]: number } = {
	xl: 6,
	lg: 5,
	md: 4,
	sm: 4,
	xs: 10,
};

export const getWindowSize = () => {
	const breakpoints: string[] = Object.keys(breakpointsValues);

	return (breakpoints as Breakpoint[]).reduce((accumulator: Breakpoint, currentValue: Breakpoint) => {
		if (window.innerWidth >= breakpointsValues[currentValue]) return currentValue;
		return accumulator;
	}, 'xl');
};

export const getCountOfTile = (breakpoint: Breakpoint) => countOfTile[breakpoint].count;

export default (): number => {
	const size = getWindowSize();

	return sizeToCount[size] * getCountOfTile(size) || 40;
};
