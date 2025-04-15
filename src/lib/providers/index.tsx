'use client';

import { ReactNode } from 'react';

import ReduxProvider from './ReduxProvider';
import UIProvider from './UIProvider';

interface ProvidersProps {
	children: ReactNode;
}

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
