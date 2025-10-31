function BookCard({ book }) {
  return (
    <div className="bg-gray-800 p-4 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-200">
      <img
        src={
          book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "https://via.placeholder.com/150x220?text=No+Cover"
        }
        alt={book.title}
        className="rounded-xl w-full h-60 object-cover mb-3"
      />
      <h2
        title={book.title}
        className="font-semibold text-lg hover:text-amber-400 transition-colors duration-200 truncate"
      >
        {book.title}
      </h2>
      <p className="text-sm text-gray-400">
        {book.author_name ? book.author_name[0] : "Unknown Author"}
      </p>
      <p className="text-xs text-gray-500 mt-1">
        First Published: {book.first_publish_year || "N/A"}
      </p>
    </div>
  );
}

export default BookCard;
