import {
	Button,
	Link,
	Spinner,
	Table,
	TableBody,
	TableCell,
	TableColumn,
	TableHeader,
	TableRow,
} from '@heroui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MemeModal from '../components/memes/MemeModal';
import useModal from '../hooks/useModal';
import { Meme, fetchMemesThunk } from '../lib/redux/slices/memesSlice';
import { RootState } from '../lib/redux/store';

// Component for displaying memes in a table format
const TablePage = () => {
	const dispatch = useDispatch();
	// Get memes, loading state, and error from Redux store
	const { memes, loading, error } = useSelector(
		(state: RootState) => state.memes,
	);
	// Modal handling with custom hook
	const { isOpen, openModal, closeModal, selectedItem } = useModal<Meme>();

	// Load memes on component mount if not already loaded
	useEffect(() => {
		if (memes.length === 0) {
			dispatch(fetchMemesThunk());
		}
	}, [dispatch, memes.length]);

	// Show spinner while loading
	if (loading) {
		return (
			<div className="flex justify-center items-center h-[400px]">
				<Spinner size="lg" />
			</div>
		);
	}

	// Show error message if loading fails
	if (error) {
		return (
			<div className="text-danger text-center">
				Error loading memes: {error}
			</div>
		);
	}

	return (
		<>
			<Table aria-label="Memes table">
				<TableHeader>
					<TableColumn>ID</TableColumn>
					<TableColumn>Name</TableColumn>
					<TableColumn>Image URL</TableColumn>
					<TableColumn>Likes</TableColumn>
					<TableColumn>Actions</TableColumn>
				</TableHeader>
				<TableBody>
					{memes.map((meme) => (
						<TableRow key={meme.id}>
							<TableCell>{meme.id}</TableCell>
							<TableCell>{meme.title}</TableCell>
							<TableCell>
								<Link href={meme.imageUrl} target="_blank">
									{meme.imageUrl}
								</Link>
							</TableCell>
							<TableCell>{meme.likes}</TableCell>
							<TableCell>
								<Button color="primary" onPress={() => openModal(meme)}>
									Edit
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>

			<MemeModal isOpen={isOpen} onClose={closeModal} meme={selectedItem} />
		</>
	);
};

export default TablePage;
