import { useLocation, useParams } from 'react-router-dom';
import { useState } from 'react';

function BookPage() {
  const { bookId } = useParams();
  const { state } = useLocation();
  const { title, publishedDate, authors, description } = state;

  const imageLinks = state.imageLinks || {};
  const thumbnail = imageLinks.thumbnail || undefined;

  const [imgSrc, setImgSrc] = useState(thumbnail === undefined ? '' : thumbnail);

  const rating = 3,
    userNotes = 'Blfdads fsdf fsd fsdf sdfdsfdsf sdfsd fdsfsd fd fsdf d.';

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
            {authors.join(', ')} | {publishedDate}
          </p>
          {/* User rating */}
          <div className="flex items-center mt-2">
            <span className="text-gray-600 text-sm mr-2">Your Rating:</span>
            {/* Star rating component (you can implement this separately) */}
            <div className="flex">
              {/* Example: Render star icons based on userRating */}
              {Array.from({ length: 5 }, (_, index) => (
                <svg
                  key={index}
                  className={`w-5 h-5 fill-current ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a.75.75 0 0 0-.606.32L7.086 5.573 2.045 6.318a.75.75 0 0 0-.417 1.279l3.558 3.453-.839 4.897a.75.75 0 0 0 1.088.791L10 14.767l4.153 2.175a.75.75 0 0 0 1.088-.79l-.839-4.898 3.558-3.452a.75.75 0 0 0-.417-1.28l-5.041-.744-2.318-4.977A.75.75 0 0 0 10 2zm0 2.445L11.21 6.32a.75.75 0 0 0 .598.41l4.976.732-3.627 3.523a.75.75 0 0 0-.216.665l.836 4.889-4.386-2.3a.75.75 0 0 0-.698 0l-4.385 2.3.836-4.888a.75.75 0 0 0-.216-.666L3.196 7.463 7.173 6.73a.75.75 0 0 0 .598-.41L10 4.444z"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Synopsis */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">Synopsis</h2>
        <p className="text-gray-700">{description}</p>
      </div>
      {/* User Notes/Review */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold mb-2">User Notes/Review</h2>
        <textarea
          rows="4"
          className="w-full p-2 border rounded-md"
          placeholder="Write your thoughts about the book..."
          value={userNotes}
          onChange={(e) => {} /* Add an onChange handler to update userNotes */}
        ></textarea>
      </div>
    </div>
  );
}

export default BookPage;
