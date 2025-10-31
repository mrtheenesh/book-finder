# Book Finder App

A simple React + Vite + TailwindCSS application that lets users search books using the OpenLibrary API.

## Features
- Search books by title or author
- Responsive and clean UI built with React + Tailwind CSS  
- Display book covers, authors, and first published year  
- Handles empty searches, no results, and API errors gracefully  
- Placeholder for missing images
- Modular React components
- Error handling for no results and API errors
- Uses caching to avoid redundant API calls  

## Tech Stack
React, Vite, TailwindCSS, OpenLibrary API

## API Used
**Open Library Search API**  
https://openlibrary.org/search.json?title={bookTitle}
**Example:**  
https://openlibrary.org/search.json?title=harry%20potter

## Tech Stack
- **Frontend Framework:** React (Vite)
- **Styling:** Tailwind CSS
- **Data Fetching:** Fetch API
- **State Management:** React Hooks (`useState`, `useEffect`, `useRef`)
- **Hosting:** Vercel (Free Deployment Platform)

### 1️Clone the Repository
```bash
git clone https://github.com/mrtheenesh/book-finder.git
cd book-finder
```

## Setup
npm install  
npm run dev

## Live Demo
🔗 [View Deployed App on Vercel](https://theenesh-book-finder.vercel.app)








