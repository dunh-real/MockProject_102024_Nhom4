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
    // Logic to handle review submission
    console.log({ rating, headline, review });
    setShowModal(false);
  };

  return (
    <Modal
      title="Rate & Review Presidential Towers"
      visible={true}
      onCancel={() => setShowModal(false)}
      footer={null}
    >
      <div className="mb-4">
        <Rate allowHalf defaultValue={rating} onChange={setRating} />
      </div>
      <Input
        placeholder="Headline"
        value={headline}
        onChange={(e) => setHeadline(e.target.value)}
        className="mb-4"
      />
      <Input.TextArea
        placeholder="Your Review"
        value={review}
        onChange={(e) => setReview(e.target.value)}
        rows={4}
      />
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
