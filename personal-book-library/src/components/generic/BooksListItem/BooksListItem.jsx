import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeBookIDs } from '../../../store';
import Button from '../Button';
import { FaBookOpen, FaCheck, FaPlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReviewModal from '../ReviewModal';

function BooksListItem({ book }) {
  const dispatch = useDispatch();

  const [imgSrc, setImgSrc] = useState(
    book.volumeInfo.imageLinks === undefined ? '' : book.volumeInfo.imageLinks.smallThumbnail
  );

  const [showReview, setShowReview] = useState(false);

  const handleClick = () => {
    setShowReview(true);
  };

  const handleClose = () => {
    setShowReview(false);
  };

  const { bookIDs } = useSelector((state) => {
    return state.books;
  });

  function handleAddToFinished() {
    handleClick();

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
    <div className="flex flex-col sm:items-center w-full p-4 bg-white shadow-md mb-2 sm:flex-row sm:w-128 hover:shadow-2xl hover:bg-gray-200 transition">
      <Link
        to={`/books/${book.id}`}
        state={book.volumeInfo}
        className="flex flex-col flex-grow sm:flex-row sm:items-center"
      >
        <div className="sm:self-start">
          <img
            src={imgSrc}
            alt={book.volumeInfo.title}
            className="w-full sm:w-28 sm:h-36 object-cover sm:mr-4"
            onError={() => setImgSrc('http://via.placeholder.com/105x144')}
          />
        </div>
        <div className="mt-4 sm:max-w-fitForButtons sm:mt-0">
          <h2 className="text-xl font-semibold">{book.volumeInfo.title}</h2>
          <p className="flex flex-col text-gray-600">
            {book.volumeInfo.authors === undefined ? 'unknown authors' : book.volumeInfo.authors.join(', ')}
            <span className="text-gray-400">{book.volumeInfo.publishedDate}</span>
          </p>
        </div>
      </Link>
      <div className="flex flex-col mt-4 phone:max-sm:flex-row sm:mt-0">
        {bookIDs.finished.includes(book.id) ? null : (
          <Button
            onClick={handleAddToFinished}
            className="mr-0 mb-2 phone:max-sm:mr-3 hover:bg-white hover:text-black transition"
            variation={'secondary'}
            rounded
          >
            {/*adds to finished section*/}
            <FaCheck className="mr-2" />
            finish
          </Button>
        )}
        {bookIDs.wantToRead.includes(book.id) ? null : (
          <Button
            onClick={handleAddToWantToRead}
            className="mr-0 mb-2 phone:max-sm:mr-3 hover:bg-white hover:text-black transition"
            variation={'secondary'}
            rounded
          >
            {/*adds to want to read*/}
            <FaBookOpen className="mr-2" />
            read for future
          </Button>
        )}
        {bookIDs.reading.includes(book.id) ? null : (
          <Button onClick={handleAddToReading} className="phone:max-sm:mb-2" variation={'secondary'} rounded>
            <FaPlay className="mr-2" />
            start reading
          </Button>
        )}
      </div>
      {showReview && <ReviewModal onClose={handleClose} />}
    </div>
  );
}

export default BooksListItem;
