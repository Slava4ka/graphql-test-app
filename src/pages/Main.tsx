import React from 'react';
import { Box, Container, styled } from '@mui/material';
import Typing from 'react-typing-animation';
import { APP_BAR_DESKTOP } from 'library/common/constants/sizes.constant';

const TitleStyle = styled('h1')(() => ({
	fontFamily: 'GrapeNuts',
	fontSize: '8rem',
}));

const Main = () => (
	<Container disableGutters maxWidth={false}>
		<Box
			sx={{
				position: 'relative',
				height: `calc(100vh - ${APP_BAR_DESKTOP + 110}px)`,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Typing loop speed={500}>
				<TitleStyle>Hello world app</TitleStyle>
				<Typing.Reset delay={500} />
			</Typing>
		</Box>
	</Container>
);

export default Main;
