import { useLocation } from 'react-router-dom';

// Custom hook for managing navigation links and their styles
const useNavigationLinks = () => {
	const location = useLocation();
	const pathname = location.pathname;

	// Generate classes for navigation links based on current path
	const linkClasses = (path: string) =>
		`transition-colors ${
			pathname === path
				? 'text-blue-600 font-semibold' // Active link style
				: 'text-gray-600 hover:text-blue-500' // Inactive link style
		}`;

	// Available navigation links
	const links = [
		{ path: '/table', label: 'Table View' },
		{ path: '/list', label: 'List View' },
	];

	return { links, linkClasses };
};

export default useNavigationLinks;
