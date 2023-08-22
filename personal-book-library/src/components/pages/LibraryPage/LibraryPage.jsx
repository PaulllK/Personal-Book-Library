import BooksList from '../../generic/BooksList';
import { useSelector } from 'react-redux';

function LibraryPage() {
  // const bookIDs = {
  //   reading: [1, 2],
  //   wantToRead: [],
  //   finished: [3],
  // };

  const { data, bookIDs } = useSelector((state) => {
    return state.books;
  });

  const readingBooks = data.filter((book) => {
    return bookIDs.reading.includes(book.id);
  });

  const wantToReadBooks = data.filter((book) => {
    return bookIDs.wantToRead.includes(book.id);
  });

  const finishedBooks = data.filter((book) => {
    return bookIDs.finished.includes(book.id);
  });

  return (
    <div className="mt-4 mx-6 sm:mx-16 md:mx-24 lg:mx-32 xl:mx-56 2xl:mx-72">
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Currently Reading</h2>
        <BooksList booksToShow={readingBooks} />
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Want to Read</h2>
        <BooksList booksToShow={wantToReadBooks} />
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">Finished Reading</h2>
        <BooksList booksToShow={finishedBooks} />
      </section>
    </div>
  );
}

export default LibraryPage;