import React, { useState } from 'react';
import { Modal, Rate, Input, Button } from 'antd';
import 'tailwindcss/tailwind.css'; // Make sure Tailwind is included in your project

interface ReviewModalProps {
  setShowModal: (show: boolean) => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ setShowModal }) => {
  const [rating, setRating] = useState<number>(5);
  const [headline, setHeadline] = useState<string>('');
  const [review, setReview] = useState<string>('');

  const handleSubmit = () => {
    console.log({ rating, headline, review });
    setShowModal(false); // Close the modal after submitting
  };

  const ratingLabels = [
    { star: 5, label: 'This property is excellent' },
    { star: 4, label: 'This property is great' },
    { star: 3, label: 'This property is good' },
    { star: 2, label: 'This property is ok' },
    { star: 1, label: 'This property is poor' }
  ];

  return (
    <Modal
      title="Rate & Review Presidential Towers"
      visible={true}
      onCancel={() => setShowModal(false)}
      footer={null}
      className="w-96 p-6"
    >
      <div className="flex flex-col space-y-2 mb-4">
        {/* Star Rating with Labels */}
        {ratingLabels.map((item) => (
          <div
            key={item.star}
            className={`flex items-center p-2 cursor-pointer rounded-md ${
              rating === item.star ? 'bg-orange-200' : 'bg-gray-100'
            }`}
            onClick={() => setRating(item.star)}
          >
            <Rate value={item.star} disabled className="mr-2" />
            <span className={`text-sm ${rating === item.star ? 'font-bold' : ''}`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Headline Input */}
      <Input
        placeholder="Headline"
        value={headline}
        onChange={(e) => setHeadline(e.target.value)}
        className="mb-4"
      />

      {/* Review Input (Text Area) */}
      <Input.TextArea
        placeholder={`Why is it ${ratingLabels.find((r) => r.star === rating)?.label.toLowerCase()}?`}
        value={review}
        onChange={(e) => setReview(e.target.value)}
        rows={4}
      />

      {/* 50 Character Minimum Hint */}
      <p className="mt-2 text-xs text-gray-500">50 character minimum</p>

      {/* Buttons: Cancel and Submit */}
      <div className="mt-4 text-right">
        <Button onClick={() => setShowModal(false)} className="mr-2 bg-orange-300 text-white hover:bg-orange-400">
          Cancel
        </Button>
        <Button
          type="primary"
          className="bg-orange-300 text-white hover:bg-orange-400"
          onClick={handleSubmit}
        >
          Submit review
        </Button>
      </div>
    </Modal>
  );
};

export default ReviewModal;
