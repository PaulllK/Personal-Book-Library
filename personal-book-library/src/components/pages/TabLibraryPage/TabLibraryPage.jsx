import React, { useState } from 'react';
import TabNavigationButton from './TabNavigationButton';
import BooksList from '../../generic/BooksList';
import { useSelector } from 'react-redux';
import TabWrapper from './TabWrapper';

const TabLibraryPage = () => {
  const [activeTab, setActiveTab] = useState('currentlyReading');

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
    <div className="container mx-auto p-4">
      <div className="flex">
        <ul className="flex w-fit">
          <TabNavigationButton
            label="Currently Reading"
            active={activeTab === 'currentlyReading'}
            onClick={() => handleTabClick('currentlyReading')}
            className="border-l-2 border-l-gray-300"
          />
          <TabNavigationButton
            label="Want to Read"
            active={activeTab === 'wantToRead'}
            onClick={() => handleTabClick('wantToRead')}
          />
          <TabNavigationButton
            label="Finished Reading"
            active={activeTab === 'finishedReading'}
            onClick={() => handleTabClick('finishedReading')}
          />
        </ul>
        <div className="flex-grow border-b-2 border-b-gray-300"></div>
      </div>

      <TabWrapper active={activeTab === 'currentlyReading'}>
        <BooksList booksToShow={readingBooks} />
      </TabWrapper>

      <TabWrapper active={activeTab === 'wantToRead'}>
        <BooksList booksToShow={wantToReadBooks} />
      </TabWrapper>

      <TabWrapper active={activeTab === 'finishedReading'}>
        <BooksList booksToShow={finishedBooks} />
      </TabWrapper>
    </div>
  );
};

export default TabLibraryPage;
