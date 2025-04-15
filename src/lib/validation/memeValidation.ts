import { z } from 'zod';
import { Meme } from '../redux/slices/memesSlice';

export const memeSchema = z.object({
	title: z.string().min(3, 'Minimum 3 letters').max(100, 'Maximum 100 letters'),
	imageUrl: z
		.string()
		.url('Enter valid url')
		.regex(/\.(jpg|jpeg)$/i, 'URL must end with .jpg or .jpeg'),
	likes: z.number().min(0, 'Minimum 0 likes').max(99, 'Maximum 99 likes'),
});

export type ValidationErrors = { [key: string]: string };

export const validateField = (
	field: keyof Meme,
	value: any,
): { error?: string } => {
	try {
		const pickObject = {
			title: field === 'title' ? true : undefined,
			imageUrl: field === 'imageUrl' ? true : undefined,
			likes: field === 'likes' ? true : undefined,
		} as const;

		const schema = memeSchema.pick(pickObject);
		schema.parse({ [field]: value });
		return {};
	} catch (error) {
		if (error instanceof z.ZodError) {
			return { error: error.errors[0].message };
		}
		return {};
	}
};

export const validateMemeData = (
	data: Partial<Meme>,
): { errors: ValidationErrors } => {
	try {
		memeSchema.parse(data);
		return { errors: {} };
	} catch (error) {
		if (error instanceof z.ZodError) {
			const errors: ValidationErrors = {};
			error.errors.forEach((err) => {
				errors[err.path[0]] = err.message;
			});
			return { errors };
		}
		return { errors: {} };
	}
};
