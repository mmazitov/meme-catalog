'use client';

import { ReactNode } from 'react';

import ReduxProvider from './ReduxProvider';
import UIProvider from './UIProvider';

// Props interface for the root providers component
interface ProvidersProps {
	children: ReactNode;
}

// Root providers wrapper component
const Providers = ({ children }: ProvidersProps) => {
	return (
		<ReduxProvider>
			<UIProvider>
				<main className="bg-background text-foreground dark">{children}</main>
			</UIProvider>
		</ReduxProvider>
	);
};
export default Providers;
