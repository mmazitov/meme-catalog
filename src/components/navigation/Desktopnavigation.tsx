import { NavbarContent, NavbarItem } from '@heroui/navbar';
import { Link } from '@heroui/react';
import useNavigationLinks from '../../hooks/useNavigationLinks';

// Desktop navigation component, hidden on mobile
const Desktopnavigation = () => {
	// Get navigation links and styling from custom hook
	const { links, linkClasses } = useNavigationLinks();

	return (
		<NavbarContent className="hidden sm:flex gap-4" justify="center">
			{/* Map through navigation links */}
			{links.map((link) => (
				<NavbarItem key={link.path}>
					<Link href={link.path} className={linkClasses(link.path)}>
						{link.label}
					</Link>
				</NavbarItem>
			))}
		</NavbarContent>
	);
};

export default Desktopnavigation;
