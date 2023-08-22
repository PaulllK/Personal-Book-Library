import { useSelector } from 'react-redux';
import BooksListItem from '../BooksListItem';

function BooksList() {
  const books = useSelector(({ books: { data, searchTerm } }) => {
    const filteredBooks = data.filter((book) => {
      const titleFound = book.title.toLowerCase().includes(searchTerm.toLowerCase());

      if (!titleFound) {
        return book.authors.some((author) => author.toLowerCase().includes(searchTerm.toLowerCase()));
      } else {
        return titleFound;
      }
    });

    return filteredBooks;
  });

  const renderedBooks = books.map((book) => {
    return <BooksListItem key={book.id} book={book} />;
  });

  return <ul className="mt-4 mx-6 sm:mx-16 md:mx-24 lg:mx-32 xl:mx-56 2xl:mx-72">{renderedBooks}</ul>;
}

export default BooksList;
