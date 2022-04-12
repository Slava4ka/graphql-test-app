import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {Breakpoint} from '@mui/system/createTheme/createBreakpoints';

interface IMHidden {
  children: any;
  breakpoint: Breakpoint;
  direction: 'Down' | 'Up';
}

const MHidden = ({ breakpoint, direction, children }: IMHidden) => {
	const theme = useTheme();

	const hiddenUp = useMediaQuery((theme.breakpoints.up(breakpoint)));
	const hiddenDown = useMediaQuery(theme.breakpoints.down(breakpoint));

	if (direction === 'Down') return hiddenDown ? null : children;

	if (direction === 'Up') return hiddenUp ? null : children;

	return null;
};

export default MHidden;
