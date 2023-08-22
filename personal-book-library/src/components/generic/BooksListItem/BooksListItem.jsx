import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBookIDs } from '../../../store';

function BooksListItem({ book }) {
  const dispatch = useDispatch();

  const [imgSrc, setImgSrc] = useState(book.cover);

  // const bookIDs = {
  //   reading: [1, 2, 3],
  //   wantToRead: [],
  //   finished: [],
  // };

  const { data, bookIDs } = useSelector((state) => {
    return state.books;
  });

  function handleAddToFinished() {
    //clone old object
    const newIDsObject = JSON.parse(JSON.stringify(bookIDs));

    // remove from want to read
    let index = newIDsObject.wantToRead.indexOf(book.id);

    if (index > -1) {
      // only splice array when item is found
      newIDsObject.wantToRead.splice(index, 1); // 2nd parameter means remove one item only
    }

    // remove from reading
    index = newIDsObject.reading.indexOf(book.id);

    if (index > -1) {
      // only splice array when item is found
      newIDsObject.reading.splice(index, 1); // 2nd parameter means remove one item only
    }

    // add to finished
    newIDsObject.finished.push(book.id);

    dispatch(changeBookIDs(newIDsObject));
  }

  function handleAddToWantToRead() {
    //clone old object
    const newIDsObject = JSON.parse(JSON.stringify(bookIDs));

    // remove from finished
    let index = newIDsObject.finished.indexOf(book.id);

    if (index > -1) {
      // only splice array when item is found
      newIDsObject.finished.splice(index, 1); // 2nd parameter means remove one item only
    }

    // remove from reading
    index = newIDsObject.reading.indexOf(book.id);

    if (index > -1) {
      // only splice array when item is found
      newIDsObject.reading.splice(index, 1); // 2nd parameter means remove one item only
    }

    // add to finished
    newIDsObject.wantToRead.push(book.id);

    dispatch(changeBookIDs(newIDsObject));
  }

  function handleAddToReading() {
    //clone old object
    const newIDsObject = JSON.parse(JSON.stringify(bookIDs));

    // remove from finished
    let index = newIDsObject.finished.indexOf(book.id);

    if (index > -1) {
      // only splice array when item is found
      newIDsObject.finished.splice(index, 1); // 2nd parameter means remove one item only
    }

    // remove from reading
    index = newIDsObject.wantToRead.indexOf(book.id);

    if (index > -1) {
      // only splice array when item is found
      newIDsObject.wantToRead.splice(index, 1); // 2nd parameter means remove one item only
    }

    // add to finished
    newIDsObject.reading.push(book.id);

    dispatch(changeBookIDs(newIDsObject));
  }

  return (
    <li className="flex items-center p-4 bg-white shadow-md mb-2">
      <img
        src={imgSrc}
        alt={book.title}
        className="w-28 h-36 object-cover mr-4"
        onError={() => setImgSrc('http://via.placeholder.com/640x360')}
      />
      <div className="flex-grow">
        <h2 className="text-xl font-semibold">{book.title}</h2>
        <p className="text-gray-600">
          {book.authors.join(', ')}
          <span className="ml-2 text-gray-400">{book.publicationYear}</span>
        </p>
      </div>
      <div className="flex flex-col mr-4">
        {bookIDs.finished.includes(book.id) ? null : (
          <button
            onClick={handleAddToFinished}
            className="bg-blue-500 text-white rounded-lg px-3 py-2 mb-2 hover:bg-blue-600"
          >
            add to finished
            {/*finish reading*/}
          </button>
        )}
        {bookIDs.wantToRead.includes(book.id) ? null : (
          <button
            onClick={handleAddToWantToRead}
            className="bg-green-500 text-white rounded-lg px-3 py-2 mb-2 hover:bg-green-600"
          >
            add to want to read
            {/*read this in the future*/}
          </button>
        )}
        {bookIDs.reading.includes(book.id) ? null : (
          <button
            onClick={handleAddToReading}
            className="bg-yellow-500 text-white rounded-lg px-3 py-2 hover:bg-yellow-600"
          >
            add to reading
            {/*start reading*/}
          </button>
        )}
      </div>
    </li>
  );
}

export default BooksListItem;
