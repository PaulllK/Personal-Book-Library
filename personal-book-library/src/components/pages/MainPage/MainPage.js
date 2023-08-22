import BooksList from '../../generic/BooksList';
import MainPageHeader from '../../generic/MainPageHeader';
import { useDispatch, useSelector } from 'react-redux';

export default function MainPage() {
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

  return (
    <div className="mt-4 mx-6 sm:mx-16 md:mx-24 lg:mx-32 xl:mx-56 2xl:mx-72">
      <MainPageHeader />
      <BooksList booksToShow={books} />
    </div>
  );
}
