import { useState } from 'react';

const useModal = <T,>() => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState<T | null>(null);

	const openModal = (item: T) => {
		setSelectedItem(item);
		setIsOpen(true);
	};

	const closeModal = () => {
		setSelectedItem(null);
		setIsOpen(false);
	};

	return { isOpen, openModal, closeModal, selectedItem };
};

export default useModal;
