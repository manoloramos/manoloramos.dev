/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2024 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 18-1-2024 23:19:42 
 *  Last modified on: 25-12-2025 23:15:32 
 * 
 *  Description: Defines the navigation elements for the Header component.
 */

import { NavPaths } from "@ts/enums/navigation";
import { NavigationItem } from "@/ts/interfaces/navigation";
import externalLink from '@assets/icons/external_link.svg';

const mainNavItems: NavigationItem[] = [
	{ url: NavPaths.About, label: 'About me' },
	{ url: NavPaths.Blog ,label: 'Blog' },
	{ url: NavPaths.Portfolio, label: 'Portfolio' }
];

const externalNavItems: NavigationItem[] = [
	{ url: NavPaths.GitHub, label: 'GitHub', icon: externalLink }
];

export { externalNavItems, mainNavItems };