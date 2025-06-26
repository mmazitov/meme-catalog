import { Spinner } from '@heroui/react';
import { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { useDispatch, useSelector } from 'react-redux';
import MemeCard from '../components/memes/MemeCard';
import useClipboard from '../hooks/useClipboard';
import { MASONRY_BREAKPOINTS } from '../lib/constants/breakpoints';
import { RootState } from '../lib/redux/rootReducer';
import { fetchMemesThunk } from '../lib/redux/slices/memesSlice';

const ListPage = () => {
	const dispatch = useDispatch();
	const { memes, loading, error } = useSelector(
		(state: RootState) => state.memes,
	);
	const { copiedId, handleCopy } = useClipboard();

	useEffect(() => {
		dispatch(fetchMemesThunk());
	}, [dispatch]);

	if (loading) {
		return (
			<div className="flex justify-center items-center h-[400px]">
				<Spinner size="lg" />
			</div>
		);
	}

	if (error) {
		return (
			<div className="text-danger text-center">
				Error loading memes: {error}
			</div>
		);
	}

	return (
		<Masonry
			breakpointCols={MASONRY_BREAKPOINTS}
			className="flex gap-4 my-masonry-grid"
			columnClassName="my-masonry-grid_column"
		>
			{memes.map((meme) => (
				<MemeCard
					key={meme.id}
					meme={meme}
					copiedId={copiedId}
					onCopy={handleCopy}
				/>
			))}
		</Masonry>
	);
};

export default ListPage;
