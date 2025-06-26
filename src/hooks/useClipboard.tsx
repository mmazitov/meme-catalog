import { useState } from 'react';

// Custom hook for handling clipboard operations
const useClipboard = () => {
	// Track ID of currently copied item
	const [copiedId, setCopiedId] = useState<string | null>(null);

	// Copy text to clipboard and show feedback
	const handleCopy = async (text: string, id: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopiedId(id);
			// Reset copied state after 2 seconds
			setTimeout(() => setCopiedId(null), 2000);
		} catch (err) {
			console.error('Error copying to clipboard:', err);
		}
	};

	return { copiedId, handleCopy };
};

export default useClipboard;
