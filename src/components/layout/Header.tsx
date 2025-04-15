import { Navbar, NavbarContent, NavbarMenuToggle } from '@heroui/navbar';
import { useState } from 'react';
import Logo from '../Logo';
import Desktopnavigation from '../navigation/Desktopnavigation';
import MobileNavigation from '../navigation/MobileNavigation';

// Main header component with responsive navigation
const Header = () => {
	// State for mobile menu visibility
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} className="header">
			<NavbarContent className="flex justify-between">
				<Logo />
				{/* Mobile menu toggle button */}
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className="sm:hidden"
				/>
			</NavbarContent>
			{/* Desktop and mobile navigation components */}
			<Desktopnavigation />
			<MobileNavigation />
		</Navbar>
	);
};

export default Header;
