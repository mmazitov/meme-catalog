import { NavbarItem, NavbarMenu } from '@heroui/navbar';
import { Link } from '@heroui/react';
import useNavigationLinks from '../../hooks/useNavigationLinks';

// Mobile navigation menu, visible only on small screens
const MobileNavigation = () => {
	const { links, linkClasses } = useNavigationLinks();

	return (
		<NavbarMenu className="flex items-center bg-[rgba(0,0,0,.7)]">
			{links.map((link) => (
				<NavbarItem key={link.path} className="text-4xl">
					<Link href={link.path} className={linkClasses(link.path)}>
						{link.label}
					</Link>
				</NavbarItem>
			))}
		</NavbarMenu>
	);
};

export default MobileNavigation;
