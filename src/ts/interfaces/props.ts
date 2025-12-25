/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2025 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 25-12-2025 22:59:09 
 *  Last modified on: 25-12-2025 23:04:13 
 * 
 *  Description: defines interfaces for component props.
 */

export interface HeaderProps {
	themeSwitch: () => void;
}

export interface LayoutProps {
	children: React.ReactElement | React.ReactElement[]
}