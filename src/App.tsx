/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 24-10-2023 12:49:20
 *  Last modified on: 11-1-2024 18:15:26 
 * 
 *  Description: Main App File
 */

import Home from '@/pages';
import { ThemeProvider } from '@emotion/react';
import { useState } from 'react';
import { Footer, Header } from '@/components/sections';
import { structure, theme } from '@theme';
import '@styles/App.css';

const App: React.FC = () => {
	const [selectedTheme, setSelectedTheme] = useState(theme.light);

	const themeSwitch = () => {
		setSelectedTheme(selectedTheme === theme.light ? theme.dark : theme.light);
	};

	return (
		<ThemeProvider theme={selectedTheme}>
			<div css={structure.app}>
				<Header themeSwitch={themeSwitch}/>
					<Home />
				<Footer />
			</div>
		</ThemeProvider>
	);
};

export default App;
