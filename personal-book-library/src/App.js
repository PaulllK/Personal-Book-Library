import MainPage from './components/pages/MainPage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LibraryPage from './components/pages/LibraryPage';
import CustomNavbar from './components/generic/CustomNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from './store';
import PageWrapper from './components/wrapers/PageWrapper';

function App() {
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
              <LibraryPage />
            </PageWrapper>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
