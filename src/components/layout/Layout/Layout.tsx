/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 24-10-2023 20:20:11
 *  Last modified on: 25-12-2025 23:04:34 
 * 
 *  Description: Layout component, which serves as the principal container for the App.
 */

import { LayoutProps } from '@/ts/interfaces/props';
import styles from './Layout.styles';

const Layout = ({ children }: LayoutProps) => {
	return (
		<main css={styles.main}>
			{children}
		</main>
	);
};

export default Layout;