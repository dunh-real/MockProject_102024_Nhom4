import React, { useState } from 'react';

interface ReviewModalProps {
  setShowModal: (show: boolean) => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ setShowModal }) => {
  const [rating, setRating] = useState<number>(5);
  const [headline, setHeadline] = useState<string>('');
  const [review, setReview] = useState<string>('');
  const submitReview = () => {
    setShowModal(false);
  };
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg max-w-lg md:max-w-xl w-full">
        <h2 className="text-2xl font-bold mb-4">Rate & Review Presidential Towers</h2>

        <div className="flex justify-between mb-4">
          {[5, 4, 3, 2, 1].map((star) => (
            <button
              key={star}
              className={`text-3xl ${rating >= star ? 'text-orange-400' : 'text-gray-300'}`}
              onClick={() => setRating(star)}
            >
              ★
            </button>
          ))}
        </div>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Headline"
          value={headline}
          onChange={(e) => setHeadline(e.target.value)}
        />

        <textarea
          className="w-full p-2 border border-gray-300 rounded mb-4"
          placeholder="Your Review"
          rows={4}
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />

        <div className="flex justify-between">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </button>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded"
            onClick={submitReview}
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
