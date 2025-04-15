import { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { useDispatch, useSelector } from 'react-redux';
import MemeCard from '../components/memes/MemeCard';
import { MASONRY_BREAKPOINTS } from '../lib/constants/breakpoints';
import useClipboard from '../hooks/useClipboard';
import { RootState } from '../lib/redux/rootReducer';
import { loadMemes } from '../lib/redux/slices/memesSlice';

const ListPage = () => {
	const dispatch = useDispatch();
	const { memes } = useSelector((state: RootState) => state.memes);
	const { copiedId, handleCopy } = useClipboard();

	useEffect(() => {
		dispatch(loadMemes());
	}, [dispatch]);

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
