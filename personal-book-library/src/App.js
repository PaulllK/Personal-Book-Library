import MainPage from './components/pages/MainPage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import LibraryPage from './components/pages/LibraryPage';
import CustomNavbar from './components/generic/CustomNavbar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBooks } from './store';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <BrowserRouter>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/library" element={<LibraryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
