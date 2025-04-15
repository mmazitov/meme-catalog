import { HeroUIProvider } from '@heroui/react';

export interface UIProviderProps {
	children: React.ReactNode;
}

const UIProvider = ({ children }: UIProviderProps) => {
	return <HeroUIProvider>{children}</HeroUIProvider>;
};

export default UIProvider;
