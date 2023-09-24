import MainPage from './components/pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LibraryPage from './components/pages/LibraryPage';
import CustomNavbar from './components/generic/CustomNavbar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from './store';
import PageWrapper from './components/wrapers/PageWrapper';
import BookPage from './components/pages/BookPage';
import TabLibraryPage from './components/pages/TabLibraryPage';

function App() {
  const dispatch = useDispatch();

  // when the website is running, programming books are initially rendered
  useEffect(() => {
    dispatch(fetchBooks('programming'));
  }, [dispatch]);

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
