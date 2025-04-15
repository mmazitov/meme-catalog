import { Navbar, NavbarContent, NavbarMenuToggle } from '@heroui/navbar';
import { useState } from 'react';
import Logo from '../Logo';
import Desktopnavigation from '../navigation/Desktopnavigation';
import MobileNavigation from '../navigation/MobileNavigation';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen} className="header">
			<NavbarContent className="flex justify-between">
				<Logo />
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className="sm:hidden"
				/>
			</NavbarContent>

			<Desktopnavigation />

			<MobileNavigation />
		</Navbar>
	);
};

export default Header;
