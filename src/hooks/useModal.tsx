import { useState } from 'react';

// Generic modal hook for handling modal state and selected item
const useModal = <T,>() => {
	// State for modal visibility
	const [isOpen, setIsOpen] = useState(false);
	// State for currently selected item
	const [selectedItem, setSelectedItem] = useState<T | null>(null);

	// Open modal with selected item
	const openModal = (item: T) => {
		setSelectedItem(item);
		setIsOpen(true);
	};

	// Close modal and clear selected item
	const closeModal = () => {
		setSelectedItem(null);
		setIsOpen(false);
	};

	return { isOpen, openModal, closeModal, selectedItem };
};

export default useModal;
