import BooksList from '../../generic/BooksList';
import MainPageHeader from '../../generic/MainPageHeader';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../../../store';
import { useEffect } from 'react';

export default function MainPage() {
  // const books = useSelector(({ books: { data, searchTerm } }) => {
  //   const filteredBooks = data.filter((book) => {
  //     const titleFound = book.title.toLowerCase().includes(searchTerm.toLowerCase());
  //
  //     if (!titleFound) {
  //       return book.authors.some((author) => author.toLowerCase().includes(searchTerm.toLowerCase()));
  //     } else {
  //       return titleFound;
  //     }
  //   });
  //
  //   return filteredBooks;
  // });

  const { data } = useSelector((state) => {
    return state.books;
  });

  return (
    <>
      <MainPageHeader />
      <BooksList booksToShow={data} />
    </>
  );
}
