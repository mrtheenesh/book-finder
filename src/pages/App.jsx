import { useState, useEffect, useRef } from "react";
import SearchBar from "../components/SearchBar";
import BookCard from "../components/BookCard";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const cache = useRef({}); // ✅ persistent cache

  // ✅ Auto clear error after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  const searchBooks = async () => {
    setError("");
    setHasSearched(true);

    if (!query.trim()) {
      setError("Please enter a book title to search.");
      setBooks([]);
      return;
    }

    // ✅ Use cached results if available
    if (cache.current[query]) {
      setBooks(cache.current[query]);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
      );
      const data = await response.json();

      if (!data.docs || data.docs.length === 0) {
        setError("No books found. Try a different title!");
        setBooks([]);
        return;
      }

      const bookList = data.docs.slice(0, 20);
      setBooks(bookList);
      cache.current[query] = bookList; // ✅ save in cache
    } catch (err) {
      console.error("Error fetching books:", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold mb-8 flex items-center gap-2">
        📚 <span>Book Finder</span>
      </h1>

      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={searchBooks}
        loading={loading}
      />

      {/* ✅ Loading */}
      {loading && (
        <div className="animate-pulse text-gray-400 text-lg mt-6">
          Loading books...
        </div>
      )}

      {/* ✅ Error */}
      {!loading && error && (
        <p className="text-red-400 text-lg mt-6">{error}</p>
      )}

      {/* ✅ Initial instruction */}
      {!hasSearched && !loading && !error && (
        <p className="text-gray-400 text-lg mt-6">
          Type a book title or author name to start searching 📖
        </p>
      )}

      {/* ✅ Results */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-6">
        {books.map((book) => (
          <BookCard key={book.key || book.cover_i} book={book} />
        ))}
      </div>
    </div>
  );
}

export default App;
