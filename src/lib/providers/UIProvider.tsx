import { HeroUIProvider } from '@heroui/react';

// Props interface for UI provider
export interface UIProviderProps {
	children: React.ReactNode;
}

// Provider component for Hero UI theme and components
const UIProvider = ({ children }: UIProviderProps) => {
	return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default UIProvider;
