import { useLocation } from 'react-router-dom';

const useNavigationLinks = () => {
	const location = useLocation();
	const pathname = location.pathname;

	const linkClasses = (path: string) =>
		`transition-colors ${
			pathname === path
				? 'text-blue-600 font-semibold'
				: 'text-gray-600 hover:text-blue-500'
		}`;

	const links = [
		{ path: '/table', label: 'Table View' },
		{ path: '/list', label: 'List View' },
	];

	return { links, linkClasses };
};

export default useNavigationLinks;
