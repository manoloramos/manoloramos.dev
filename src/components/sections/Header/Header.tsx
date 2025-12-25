/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 06-11-2023 12:49:52
 *  Last modified on: 25-12-2025 23:03:01 
 * 
 *  Description: Header component. Contains the main navigation elements and the light/dark toggle.
 */

import { HeaderProps } from '@/ts/interfaces/props';
import { NavPaths } from '@/ts/enums/navigation';
import { ThemeProperties } from '@/ts/interfaces/theming';
import _ from 'lodash';
import logoDark from '@assets/images/logo/logo_sm_dark.png';
import logoLight from '@assets/images/logo/logo_sm_light.png';
import styles from './Header.styles';
import useMixTheme from '@utils/hooks/useMixTheme';
import { useTheme } from '@emotion/react';
import { externalNavItems, mainNavItems } from '@data';

const Header = ({ themeSwitch }: HeaderProps) => {
	const {
		colorScheme,
		baseStyles
	} = useTheme() as ThemeProperties;

	const themedHeaderStyles = useMixTheme(styles.header, baseStyles);

	return (
		<header css={themedHeaderStyles}>
			<div css={styles.headerContainer}>
				<div css={styles.navbarContainer}>
					<a href={NavPaths.Home}>
						{
							colorScheme === 'light' ?
								<img src={logoLight} alt="Logo"/>
							:
								<img src={logoDark} alt="Logo"/>
						
						}
						<span>Manolo Ramos</span>
					</a>
					<nav>
						{
							_.map(mainNavItems, (item, key) => (
								<div key={key}>
									<a href={item.url}>
										<span>{item.label}</span>
									</a>
								</div>
							))
						}
						
						{
							_.map(externalNavItems, (item, key) => (
								<div key={key}>
									<a 
										href={item.url}
										target='_blank'
										rel='noreferrer'
									>
										<span>{item.label}</span>
										{ item.icon &&
											<img 
												src={item.icon} 
												alt="Nav item icon"
											/>
										}
									</a>
								</div>
							))
						}
					</nav>
				</div>
				<div css={styles.themeButtonContainer}>
					<button onClick={themeSwitch}>
						<img src="#" alt="Theme" />
					</button>
				</div>
			</div>
		</header>
	);
};

export default Header;