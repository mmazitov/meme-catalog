# Meme Catalog

A modern React application for browsing and managing meme collections. Features both table and grid views, with the ability to edit meme details and copy image URLs. Built with React, TypeScript, and modern tooling. Uses the Imgflip API for fetching meme content.

## Tech Stack

- **[React:](https://react.dev/)** A JavaScript library for building user interfaces
- **[Redux Toolkit:](https://redux-toolkit.js.org/)** State management with built-in best practices
- **[TypeScript:](https://www.typescriptlang.org/)** Static typing for enhanced development experience
- **[Redux Persist:](https://www.npmjs.com/package/redux-persist)** Persistence layer for Redux state
- **[Tailwind CSS:](https://tailwindcss.com/)** Utility-first CSS framework
- **[Hero UI:](https://heroui.dev/)** Modern UI component library
- **[React Masonry CSS:](https://www.npmjs.com/package/react-masonry-css)** Responsive grid layout library
- **[Zod:](https://zod.dev/)** TypeScript-first schema validation
- **[ESLint:](https://eslint.org/)** & **[Prettier:](https://prettier.io/)** Code quality and formatting
- **[Vite:](https://vite.dev/)** Next generation frontend tooling

## Features

- **API Integration**: Fetches meme data from the Imgflip API
- **Random Selection**: Displays 10 random memes from the API
- **Dual View Modes**: Switch between table and masonry grid layouts
- **Meme Management**: Edit meme titles, URLs, and like counts
- **Clipboard Integration**: Quick copy functionality for meme URLs
- **Form Validation**: Schema-based validation using Zod
- **Responsive Design**: Mobile-friendly with adaptive navigation
- **State Persistence**: Automatically saves state to localStorage
- **Automatic Likes**: Random like count generation for each meme

## API Integration

The application integrates with the [Imgflip API](https://imgflip.com/api) to fetch meme templates. Key features of the API integration include:
- Fetches a collection of popular meme templates
- Randomly selects 10 memes for display
- Automatically generates random like counts (0-99) for each meme
- Caches fetched memes in Redux store with persistence

## Views

### Table View
- Organized display of meme information in a structured format
- Quick access to edit functionality
- Sortable columns for better organization

### Masonry Grid View
- Pinterest-style responsive grid layout
- Automatically adjusts columns based on screen size:
  - 4 columns for large screens (default)
  - 3 columns at 1100px breakpoint
  - 2 columns at 700px breakpoint
  - 1 column at 500px breakpoint
- Optimized image display with proper spacing
- Copy URL functionality with visual feedback
- Like counter overlay on images

## Getting Started

Before starting 🏁, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

```bash
# Before starting 🏁, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.  

# Clone this project
$ git clone https://github.com/mmazitov/meme-catalog

# Access
$ cd meme-catalog

# Install dependencies
$ npm install
# or
$ yarn install

# Start development server
$ npm run dev
# or
$ yarn dev

# Build for production
$ npm run build
# or
$ yarn build

# Preview production build
$ npm run preview
# or
$ yarn preview

# Run linting
$ npm run lint
# or
$ yarn lint
```

## Project Structure

<code>Components</code>

- `MemeCard`: Grid view component for individual memes
- `MemeModal`: Edit modal for meme details
- `TablePage`: Table view for meme listing
- `ListPage`: Masonry grid view for memes

<code>Hooks</code>

- `useClipboard`: Manages clipboard operations
- `useModal`: Generic modal state management
- `useNavigationLinks`: Navigation link management

<code>Features</code>

- `Redux State`: Centralized state management with persistence
- `Form Validation`: Schema-based validation for meme data
- `Responsive Layout`: Adaptive design for all screen sizes

<code>Folder Structure</code>

```
src/
├── components/    # Reusable UI components
├── hooks/         # Custom React hooks
├── lib/          # Core functionality
│   ├── data/     # Initial data
│   ├── redux/    # Redux setup and slices
│   ├── validation/ # Form validation
│   └── providers/ # React providers
└── pages/        # Main view components
```

## Future Enhancements

- Add search and filtering capabilities
- Implement meme creation functionality
- Add sorting options for both views
- Implement image upload functionality
- Add user authentication and personal collections
- Add sharing capabilities
- Implement infinite scroll for large collections

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
