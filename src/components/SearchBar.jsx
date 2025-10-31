function SearchBar({ query, setQuery, onSearch, loading }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") onSearch();
  };

  return (
    <div className="flex items-center mb-10 w-full max-w-2xl">
      <input
        type="text"
        placeholder="Search by book title..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
        aria-label="Search book title"
        className="flex-grow p-3 rounded-l-xl bg-gray-800 text-white outline-none border border-gray-700"
      />
      <button
        onClick={onSearch}
        disabled={loading}
        aria-label="Search button"
        className={`font-semibold px-6 py-3 rounded-r-xl transition-colors duration-200 ${
          loading
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-amber-600 hover:bg-amber-500 text-white"
        }`}
      >
        {loading ? "Searching..." : "Search"}
      </button>
    </div>
  );
}

export default SearchBar;
