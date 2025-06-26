import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import ListView from './pages/ListPage';
import TablePage from './pages/TablePage';

// Main application component with routing setup
const App = () => {
	return (
		<BrowserRouter>
			{/* Main layout wrapper */}
			<div className="flex flex-col bg-gray-50 dark:bg-gray-800 min-h-screen">
				<Header />
				{/* Main content area */}
				<main className="flex-grow mx-auto px-4 py-6 container">
					<div className="bg-white dark:bg-gray-900 shadow p-6 rounded-lg">
						<Routes>
							<Route path="/" element={<Navigate to="/table" replace />} />
							<Route path="/table" element={<TablePage />} />
							<Route path="/list" element={<ListView />} />
						</Routes>
					</div>
				</main>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
