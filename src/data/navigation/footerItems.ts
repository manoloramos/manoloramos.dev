/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2024 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 18-1-2024 23:19:54 
 *  Last modified on: 25-12-2025 23:22:11 
 * 
 *  Description: Defines the navigation elements for the Footer component.
 */

import { FooterLinks } from "@ts/enums/navigation";
import { NavigationItem } from "@/ts/interfaces/navigation";
import github from '@assets/icons/github_lm.svg';
import netlify from '@assets/icons/netlify_lm.svg';
import vite from '@assets/icons/vite.svg';

const footerNavItems: NavigationItem[] = [
	{ url: FooterLinks.Vite, label: 'Vite', icon: vite},
	{ url: FooterLinks.Netlify ,label: 'Netlify', icon: netlify },
	{ url: FooterLinks.GitHub, label: 'GitHub', icon: github },
];

export default footerNavItems;