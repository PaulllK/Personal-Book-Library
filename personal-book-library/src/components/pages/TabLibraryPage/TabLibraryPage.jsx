import React, { useState } from 'react';
import TabNavigationButton from './TabNavigationButton';
import BooksList from '../../generic/BooksList';
import { useSelector } from 'react-redux';
import TabWrapper from './TabWrapper';

const TabLibraryPage = () => {
  const CURRENTLY_READING = 'currentlyReading';
  const WANT_TO_READ = 'wantToRead';
  const FINISHED_READING = 'finishedReading';

  const [activeTab, setActiveTab] = useState(CURRENTLY_READING);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

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
    <div className="container mx-auto phone:p-4 sm:p-0">
      <div className="flex">
        <div className="flex w-full sm:w-auto">
          <TabNavigationButton
            label="Currently Reading"
            active={activeTab === CURRENTLY_READING}
            onClick={() => handleTabClick(CURRENTLY_READING)}
            className="border-l-2 border-l-gray-300"
          />
          <TabNavigationButton
            label="Want to Read"
            active={activeTab === WANT_TO_READ}
            onClick={() => handleTabClick(WANT_TO_READ)}
          />
          <TabNavigationButton
            label="Finished Reading"
            active={activeTab === FINISHED_READING}
            onClick={() => handleTabClick(FINISHED_READING)}
          />
        </div>
        <div className="hidden sm:block flex-grow border-b-2 border-b-gray-300"></div>
      </div>

      <TabWrapper active={activeTab === CURRENTLY_READING}>
        <BooksList booksToShow={readingBooks} />
      </TabWrapper>

      <TabWrapper active={activeTab === WANT_TO_READ}>
        <BooksList booksToShow={wantToReadBooks} />
      </TabWrapper>

      <TabWrapper active={activeTab === FINISHED_READING}>
        <BooksList booksToShow={finishedBooks} />
      </TabWrapper>
    </div>
  );
};

export default TabLibraryPage;
