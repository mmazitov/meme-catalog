import { Button, Card, CardBody, CardHeader, Image, Link } from '@heroui/react';
import { AiFillLike } from 'react-icons/ai';
import { FaRegCopy } from 'react-icons/fa';
import { IoIosDoneAll } from 'react-icons/io';
import { Meme } from '../../lib/redux/slices/memesSlice';

// Props interface for MemeCard component
interface MemeCardProps {
	meme: Meme; // Meme data to display
	copiedId: string | null; // ID of currently copied meme URL
	onCopy: (text: string, id: string) => void; // Copy handler function
}

// Component for displaying individual meme cards
const MemeCard = ({ meme, copiedId, onCopy }: MemeCardProps) => {
	return (
		<Card>
			<CardHeader className="flex-col items-start pb-0">
				<h2>{meme.title}</h2>
				<div className="flex justify-between items-center w-full">
					<Link href={meme.imageUrl} className="w-4/5 break-all">
						{meme.imageUrl}
					</Link>
					<Button
						onClick={() => onCopy(meme.imageUrl, meme.id)}
						className="flex-shrink-0 p-0 min-w-[40px]"
					>
						{copiedId === meme.id ? <IoIosDoneAll /> : <FaRegCopy />}
					</Button>
				</div>
			</CardHeader>
			<CardBody>
				<div className="relative meme-img">
					<Image
						src={meme.imageUrl}
						alt={meme.title}
						className="w-full object-cover"
					/>
					<div className="right-5 bottom-5 z-10 absolute flex justify-center items-center bg-default rounded-full w-[50px] h-[50px] font-bold likes">
						<span>{meme.likes}</span>
						<AiFillLike />
					</div>
				</div>
			</CardBody>
		</Card>
	);
};

export default MemeCard;
