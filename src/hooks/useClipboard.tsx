import { useState } from 'react';

const useClipboard = () => {
	const [copiedId, setCopiedId] = useState<string | null>(null);

	const handleCopy = async (text: string, id: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopiedId(id);
			setTimeout(() => setCopiedId(null), 2000);
		} catch (err) {
			console.error('Error copying to clipboard:', err);
		}
	};

	return { copiedId, handleCopy };
};

export default useClipboard;
