import React, {useMemo} from 'react';
// material
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';

import palette from 'library/utils/theme/palette';
import breakpoints from 'library/utils/theme/breakpoints';
import typography from 'library/utils/theme/typography';

interface IThemeConfig {
  children: React.ReactElement;
}

const ThemeConfig = ({ children }: IThemeConfig) => {
	const themeOptions = useMemo(
		() => ({
			palette,
			// shape,
			breakpoints,
			// shadows,
			// customShadows,
			typography,
		}),
		[],
	);

	const theme = createTheme(themeOptions);
	// theme.components = componentsOverride(theme);

	return (
		<StyledEngineProvider injectFirst>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</StyledEngineProvider>
	);
};

export default ThemeConfig;
