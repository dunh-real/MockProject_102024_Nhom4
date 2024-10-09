import React, { useState } from 'react';
import { Modal, Rate, Input, Button } from 'antd';

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

  return (
    <Modal
      title="Rate & Review Presidential Towers"
      visible={true}
      onCancel={() => setShowModal(false)} // Close modal on cancel
      footer={null} // Remove default footer
    >
      {/* Rating Component */}
      <div className="mb-4">
        <Rate 
          allowHalf 
          defaultValue={rating} 
          onChange={setRating} // Update rating state
        />
        {/* Conditional text based on rating */}
        <p className="mt-1 text-sm">
          {rating === 5 && 'This property is excellent'}
          {rating === 4 && 'This property is great'}
          {rating === 3 && 'This property is good'}
          {rating === 2 && 'This property is ok'}
          {rating === 1 && 'This property is poor'}
        </p>
      </div>

      {/* Headline Input */}
      <Input
        placeholder="Headline"
        value={headline}
        onChange={(e) => setHeadline(e.target.value)} // Update headline state
        className="mb-4"
      />

      {/* Review Input (Text Area) */}
      <Input.TextArea
        placeholder={`Why is it ${rating === 5 ? 'excellent' : rating === 4 ? 'great' : 'this rating'}?`}
        value={review}
        onChange={(e) => setReview(e.target.value)} // Update review state
        rows={4}
      />

      {/* Buttons: Submit and Cancel */}
      <div className="mt-4 text-right">
        <Button onClick={() => setShowModal(false)} className="mr-2">
          Cancel
        </Button>
        <Button type="primary" onClick={handleSubmit}>
          Submit Review
        </Button>
      </div>
    </Modal>
  );
};

export default ReviewModal;
