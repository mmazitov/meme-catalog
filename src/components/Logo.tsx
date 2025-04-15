import { NavbarBrand } from '@heroui/navbar';
import { Link } from '@heroui/react';

// Application logo component with brand link
const Logo = () => {
	return (
		<NavbarBrand>
			<Link href="/" className="font-bold text-2xl">
				Meme Catalog
			</Link>
		</NavbarBrand>
	);
};

export default Logo;
