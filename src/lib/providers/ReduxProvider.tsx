import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import store, { persistor } from '../redux/store';

// Props interface for Redux provider wrapper
interface ReduxProviderProps {
	children: ReactNode;
}

// Provider component for Redux store with persistence
const ReduxProvider = ({ children }: ReduxProviderProps) => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{children}
			</PersistGate>
		</Provider>
	);
};

export default ReduxProvider;
