import {
	Button,
	Link,
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
import { Meme, loadMemes } from '../lib/redux/slices/memesSlice';
import { RootState } from '../lib/redux/store';

// Component for displaying memes in a table format
const TablePage = () => {
	const dispatch = useDispatch();
	// Get memes from Redux store
	const { memes } = useSelector((state: RootState) => state.memes);
	// Modal handling with custom hook
	const { isOpen, openModal, closeModal, selectedItem } = useModal<Meme>();

	// Load memes on component mount
	useEffect(() => {
		dispatch(loadMemes());
	}, [dispatch]);

	return (
		<>
			<Table aria-label="Example static collection table">
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
