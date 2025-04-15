import { Link } from '@heroui/react';

const Footer = () => {
	return (
		<footer className="bg-white dark:bg-gray-900 shadow py-4">
			<div className="mx-auto px-4 text-gray-600 dark:text-gray-300 text-center container">
				© {new Date().getFullYear()} <Link href="/">Memes App</Link>. All rights
				reserved.
			</div>
		</footer>
	);
};

export default Footer;
