import React from 'react';
import {Navigate, useRoutes} from 'react-router-dom';

import DashboardLayout from 'library/common/components/DashboardLayout';
import Main from 'pages/Main';
import RickAndMorty from 'pages/RickAndMorty';
import Episodes from 'pages/Episodes';

const Routes = () => useRoutes([
	{
		path: '/',
		element: <DashboardLayout />,
		children: [
			{element: <Navigate to="/main" replace />},
			{path: 'main', element: <Main />},
			{path: 'rickAndMorty', element: <RickAndMorty />},
			{path: 'episodes', element: <Episodes />},
			{path: '/', element: <Navigate to="/main" replace />},
		],
	},
]);

export default Routes;
