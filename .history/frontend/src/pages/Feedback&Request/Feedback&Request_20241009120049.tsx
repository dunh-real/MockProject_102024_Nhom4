import { useState } from 'react';
import ReviewModal from '../../component/ReviewModal';

const reviews = [
  {
    date: 'Sept. 8, 2024',
    rating: 5,
    text: 'I love living at Presidential Towers. Such a beautiful place with great amenities. I also love how responsive the maintenance team is.',
    managerResponse: 'Property Manager Responded Sept. 23, 2024',
  },
  {
    date: 'June 6, 2024',
    rating: 4.5,
    text: 'The location of Presidential Towers makes it perfect for a young couple to stay without vehicle. The amenities and facilities are appropriately located, the maintenance is super fast.',
    managerResponse: 'Property Manager Responded July 3, 2024',
  },
];

function FeedbackRequest() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold">Feedback & Request</h1>
            <p className="text-gray-600">4.5 Blended Score (77 Renter Reviews)</p>
          </div>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded"
            onClick={() => setShowModal(true)}
          >
            Write a Review
          </button>
        </div>

        <div className="grid gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <div>
                  <div className="text-orange-400">
                    {'★'.repeat(Math.floor(review.rating))}{' '}
                    {review.rating % 1 !== 0 && '☆'}
                  </div>
                  <p className="text-gray-600">{review.date}</p>
                </div>
              </div>
              <p className="text-gray-800">{review.text}</p>
              <p className="text-sm text-gray-500 mt-2">{review.managerResponse}</p>
            </div>
          ))}
        </div>
      </div>

      {showModal && <ReviewModal setShowModal={setShowModal} />}
    </div>
  );
}

export default FeedbackRequest;
