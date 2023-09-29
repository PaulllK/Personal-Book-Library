import BooksListItem from '../BooksListItem';

function BooksList({ booksToShow }) {
  const renderedBooks = booksToShow.map((book) => {
    return <BooksListItem key={book.id} book={book} />;
  });

  return (
    <div className={`flex flex-col ${renderedBooks.length ? 'items-center' : ''} mt-4`}>
      {renderedBooks.length ? (
        renderedBooks
      ) : (
        <div className="my-8">
          <p className="text-gray-500">No books here</p>
        </div>
      )}
    </div>
  );
}

export default BooksList;
