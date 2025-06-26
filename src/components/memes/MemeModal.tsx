import {
	Button,
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	Selection,
} from '@heroui/react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Meme, updateMeme } from '../../lib/redux/slices/memesSlice';
import {
	ValidationErrors,
	validateField,
	validateMemeData,
} from '../../lib/validation/memeValidation';

// Props interface for the modal component
interface MemeModalProps {
	isOpen: boolean; // Controls modal visibility
	onClose: () => void; // Handler for closing the modal
	meme: Meme | null; // Meme data to edit
}

// Modal component for editing meme details
const MemeModal = ({ isOpen, onClose, meme }: MemeModalProps) => {
	const dispatch = useDispatch();
	// Form state management
	const [formData, setFormData] = useState<Partial<Meme>>({});
	const [errors, setErrors] = useState<ValidationErrors>({});
	// Likes selection state
	const [selectedLikes, setSelectedLikes] = useState<Selection>(
		new Set([meme?.likes?.toString() || '0']),
	);

	// Reset form when modal opens
	useEffect(() => {
		if (isOpen && meme) {
			resetForm(meme);
		}
	}, [isOpen, meme]);

	const resetForm = (meme: Meme) => {
		setErrors({});
		setFormData({ title: meme.title, imageUrl: meme.imageUrl });
		setSelectedLikes(new Set([meme.likes.toString()]));
	};

	const handleChange = (field: keyof Meme, value: string | number) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
		if (!value || String(value).trim() === '') {
			setErrors((prev) => ({ ...prev, [field]: 'This field cannot be empty' }));
			return;
		}
		const { error } = validateField(field, value);
		setErrors((prev) => ({ ...prev, [field]: error || '' }));
	};

	const getCurrentFormState = () => ({
		...formData,
		likes: parseInt(Array.from(selectedLikes)[0]?.toString() || '0'),
	});

	const isFormValid = () => {
		const { errors: validationErrors } = validateMemeData(
			getCurrentFormState(),
		);
		return Object.keys(validationErrors).length === 0;
	};

	const handleSubmit = () => {
		if (!meme) return;

		const currentState = getCurrentFormState();
		const { errors: validationErrors } = validateMemeData(currentState);

		if (Object.keys(validationErrors).length > 0) {
			setErrors(validationErrors);
			return;
		}

		dispatch(updateMeme({ ...meme, ...currentState }));
		onClose();
	};

	if (!meme) return null;

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalContent>
				<ModalHeader>Edit Meme</ModalHeader>
				<ModalBody>
					<div className="flex flex-col gap-4">
						<Input
							label="Title"
							value={formData.title || ''}
							color={errors.title ? 'danger' : 'default'}
							onChange={(e) => handleChange('title', e.target.value)}
						/>
						{!formData.title && (
							<span className="text-gray-500 text-sm">
								Please enter title, minimum 3 letters
							</span>
						)}
						<Input
							label="Image URL"
							value={formData.imageUrl || ''}
							color={errors.imageUrl ? 'danger' : 'default'}
							onChange={(e) => handleChange('imageUrl', e.target.value)}
						/>
						{!formData.imageUrl && (
							<span className="text-gray-500 text-sm">
								Please provide a valid image URL. URL must end with .jpg, .jpeg,
								.webp, or .avif
							</span>
						)}
						<Dropdown>
							<DropdownTrigger>
								<Button variant="bordered">
									Likes: {Array.from(selectedLikes)[0] || meme.likes}
								</Button>
							</DropdownTrigger>
							<DropdownMenu
								items={Array.from({ length: 100 }, (_, i) => ({
									key: i.toString(),
									label: i.toString(),
								}))}
								aria-label="Select likes"
								className="max-h-[200px] overflow-y-auto"
								onAction={(key) =>
									handleChange('likes', parseInt(key.toString()))
								}
							>
								{(item) => (
									<DropdownItem key={item.key}>{item.label}</DropdownItem>
								)}
							</DropdownMenu>
						</Dropdown>
						{errors.likes && (
							<p className="text-danger text-sm">{errors.likes}</p>
						)}
					</div>
				</ModalBody>
				<ModalFooter>
					<Button color="danger" variant="light" onPress={onClose}>
						Cancel
					</Button>
					<Button
						color="primary"
						onPress={handleSubmit}
						isDisabled={!isFormValid()}
					>
						Save Changes
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default MemeModal;
