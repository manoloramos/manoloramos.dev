/**
 *  Project: manoloramos.dev
 *  Author: Manolo Ramos
 *  Copyright: (C) 2023 Manolo Ramos - All Rights Reserved
 * 
 *  File created on: 06-11-2023 12:49:57
 *  Last modified on: 25-12-2025 23:05:03 
 * 
 *  Description: Footer component. Contains copyright, links & last build info.
 */

import _ from "lodash";
import { footerNavItems } from "@data";
import styles from "./Footer.styles";

// TODO: remove spread syntax for CSS
const Footer = () => {
	return (
		<footer css={{...styles.footer}}>
			<section css={{...styles.section}}>
				<div>
					<span>Made with <u>♥</u> by <abbr title="💽 Last built on: 29-11-2023 17:52">Manolo Ramos</abbr></span>
				</div>
			</section>
			<section css={{...styles.section}}>
				<nav css={{...styles.links}}>
					{
						_.map(footerNavItems, (item, key) => (
							<a
								key={key}
								href={item.url}
								title={item.label}
								target="_blank"
								rel="noopener noreferrer">
								<img 
									src={item.icon}
									alt={item.label}
								/>
								<span>{item.label}</span>
							</a>
						))
					}
				</nav>
			</section>
		</footer>
	);
};

export default Footer;