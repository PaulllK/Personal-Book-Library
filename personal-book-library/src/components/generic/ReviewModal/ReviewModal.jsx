import React, { useEffect, useState } from 'react';
import Button from '../Button';

const ReviewModal = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const [ratingIndex, setRatingIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [review, setReview] = useState('');

  const handleRatingChange = (newRatingIndex) => {
    setRatingIndex(newRatingIndex);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  return (
    <div>
      <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80"></div>
      <div className="fixed max-w-xl top-40 bottom-40 m-auto left-5 right-5 xxs:left-20 xxs:right-20 sm:inset-40 h-fit p-10 bg-white border rounded-lg shadow-2xl">
        <div className="flex flex-col align-middle justify-between">
          <div className="flex flex-col mb-4">
            <span className="text-lg font-semibold">Rate the book!</span>
            <div className="flex -ml-1">
              {[1, 2, 3, 4, 5].map((starIndex) => (
                <button
                  key={starIndex}
                  className={`p-0.5 ${
                    starIndex <= ratingIndex
                      ? 'text-yellow-500 transition'
                      : starIndex <= hoveredIndex
                      ? 'text-yellow-700 transition'
                      : 'text-gray-400'
                  } text-2xl`}
                  onClick={() => handleRatingChange(starIndex)}
                  onMouseEnter={() => setHoveredIndex(starIndex)}
                  onMouseLeave={() => setHoveredIndex(-1)}
                >
                  {/* star emoji unicode */}
                  &#9733;
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Your Review:</label>
            <textarea
              className="w-full p-2 border rounded-md resize-none"
              rows="4"
              placeholder="Write your review here..."
              value={review}
              onChange={handleReviewChange}
            ></textarea>
          </div>
          <Button className="mx-auto w-full phone:w-48" variation={'secondary'} rounded>
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
