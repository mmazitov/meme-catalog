import { z } from 'zod';
import { Meme } from '../redux/slices/memesSlice';

// Zod schema for meme validation
export const memeSchema = z.object({
	// Title must be between 3 and 100 characters
	title: z.string().min(3, 'Minimum 3 letters').max(100, 'Maximum 100 letters'),
	// Image URL must be valid and end with .jpg, .jpeg, .webp, or .avif
	imageUrl: z
		.string()
		.url('Enter valid url')
		.regex(
			/\.(jpg|jpeg|webp|avif)$/i,
			'URL must end with .jpg, .jpeg, .webp, or .avif',
		),
	// Likes must be between 0 and 99
	likes: z.number().min(0, 'Minimum 0 likes').max(99, 'Maximum 99 likes'),
});

// Type for validation error messages
export type ValidationErrors = { [key: string]: string };

// Validate a single field
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

// Validate entire meme data object
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
