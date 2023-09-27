import MainPage from './components/pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LibraryPage from './components/pages/LibraryPage';
import CustomNavbar from './components/generic/CustomNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { fetchBooks } from './store';
import PageWrapper from './components/wrapers/PageWrapper';
import BookPage from './components/pages/BookPage';
import TabLibraryPage from './components/pages/TabLibraryPage';

function App() {
  const dispatch = useDispatch();

  const { ratings } = useSelector((state) => {
    return state.books;
  });

  const firstRender = useRef(true);

  useEffect(() => {
    // when the website starts running, programming books are loaded only at the first render
    if (firstRender.current) {
      dispatch(fetchBooks('programming'));
      firstRender.current = false;
    }

    localStorage.setItem('ratings', JSON.stringify(ratings));
  }, [ratings]);

  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <PageWrapper>
              <MainPage />
            </PageWrapper>
          }
        />
        <Route
          path="/library"
          element={
            <PageWrapper>
              <TabLibraryPage />
            </PageWrapper>
          }
        />
        <Route
          path="/books/:bookId"
          element={
            <PageWrapper>
              <BookPage />
            </PageWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
