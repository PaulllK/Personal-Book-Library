import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function BookPage() {
  const { bookId } = useParams();
  const { state } = useLocation();
  const { title, publishedDate, authors, description } = state;

  const imageLinks = state.imageLinks || {};
  const thumbnail = imageLinks.thumbnail || undefined;

  const [imgSrc, setImgSrc] = useState(thumbnail === undefined ? '' : thumbnail);

  const reviewsForThisBook = useSelector((state) => {
    return Object.hasOwn(state.books.ratings, bookId) ? state.books.ratings[bookId] : [];
  });

  const averageRating = Math.round(
    reviewsForThisBook.reduce((acc, currVal) => {
      return acc + currVal.bookRating;
    }, 0) / reviewsForThisBook.length
  );

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <div className="w-1/4">
          <img
            src={imgSrc}
            alt={`Cover of ${title}`}
            className="w-full h-auto"
            onError={() => setImgSrc('http://via.placeholder.com/225x309')}
          />
        </div>
        <div className="w-3/4 pl-4">
          <h1 className="text-2xl font-semibold mb-2">{title}</h1>
          <p className="text-gray-600 text-sm">
            {authors === undefined ? 'unknown authors' : authors.join(', ')}{' '}
            {publishedDate === undefined ? '' : '| ' + publishedDate}
          </p>
          <div className="flex items-center mt-2">
            <div className="flex select-none">
              {Array.from({ length: 5 }, (_, index) => (
                <div
                  key={index}
                  className={`text-2xl mr-1 pb-1 ${index < averageRating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  &#9733;
                </div>
              ))}
            </div>
            <div className="ml-2 text-gray-500 text-sm">{reviewsForThisBook.length} review(s)</div>
          </div>
        </div>
      </div>
      {description && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Description</h2>
          <p className="text-gray-700">{description}</p>
        </div>
      )}
      {reviewsForThisBook.length !== 0 && (
        <div className="mt-10">
          <h2 className="text-xl font-semibold mb-4">Reviews</h2>
          <div>
            {reviewsForThisBook.map((reviewItem, index) => (
              <div key={index} className="flex flex-col border-t-2 py-8 px-4">
                <h2 className="text-lg font-semibold mb-4">{reviewItem.user}</h2>
                <div className="flex flex-col">
                  <div className="flex select-none">
                    {Array.from({ length: 5 }, (_, index) => (
                      <div
                        key={index}
                        className={`text-2xl mr-1 pb-1 ${
                          index < reviewItem.bookRating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        &#9733;
                      </div>
                    ))}
                  </div>
                  <p>{reviewItem.bookReview}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BookPage;
