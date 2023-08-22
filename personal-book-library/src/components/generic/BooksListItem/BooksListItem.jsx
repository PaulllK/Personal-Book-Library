import { useState } from 'react';

function BooksListItem({ book }) {
  const [imgSrc, setImgSrc] = useState(book.cover);

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
    </li>
  );
}

export default BooksListItem;
