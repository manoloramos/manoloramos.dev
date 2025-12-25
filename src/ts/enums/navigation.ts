/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 13-11-2023 23:02:38
 *  Last modified on: 25-12-2025 23:22:58 
 * 
 *  Description: Enums used in navigation related components.
 */

// TODO: remove once the router is implemented
enum NavPaths {
	Home = '/',
	About = '/about',
	Blog = '/blog',
	Portfolio = '/portfolio',
	GitHub = 'https://github.com/manoloramos',
	Contact = '/contact'
}

enum FooterLinks {
	Vite = 'https://vitejs.dev',
	Netlify = 'https://app.netlify.com/sites/manoloramos/deploys',
	GitHub = 'https://github.com/manoloramos'
}

export { FooterLinks, NavPaths };