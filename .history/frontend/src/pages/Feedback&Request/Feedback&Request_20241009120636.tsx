import React, { useState } from 'react';
import { Card, Button, Rate, Pagination, Select } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
import ReviewModal from '../../component/ReviewModal';

const { Option } = Select;

interface Review {
  date: string;
  rating: number;
  text: string;
  managerResponse: string;
  helpfulCount: number;
}

const reviews: Review[] = [
  {
    date: 'Sept. 8, 2024',
    rating: 5,
    text: 'I love living at Presidential Towers. Such a beautiful place with great amenities. I also love how responsive the maintenance team is.',
    managerResponse: 'Property Manager Responded Sept. 23, 2024',
    helpfulCount: 2,
  },
  {
    date: 'June 6, 2024',
    rating: 4.5,
    text: 'The location of Presidential Towers makes it perfect for a young couple to stay without a vehicle. The amenities and facilities are appropriately located, the maintenance is super fast.',
    managerResponse: 'Property Manager Responded July 3, 2024',
    helpfulCount: 2,
  },
];

const FeedbackRequest: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleSortChange = (value: string) => {
    console.log(`Sort by: ${value}`);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header Rating Section */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="text-center mr-4">
            <div className="text-3xl font-bold text-orange-500">4.5</div>
            <div className="text-sm">Great</div>
            <div className="text-xs text-gray-500">Out of 5</div>
          </div>
          <div className="ml-4">
            <Rate allowHalf defaultValue={4.5} disabled style={{ color: 'orange' }} />
            <div className="text-gray-500">4.5 Blended Score</div>
            <div className="text-xs text-gray-500">77 Renter Reviews</div>
          </div>
        </div>
        <Button type="primary" onClick={() => setShowModal(true)}>
          Write a Review
        </Button>
      </div>

      {/* Sort Section */}
      <div className="mb-6 flex justify-between">
        <Select defaultValue="Most Recent" onChange={handleSortChange}>
          <Option value="recent">Most Recent</Option>
          <Option value="highest">Highest Rating</Option>
          <Option value="lowest">Lowest Rating</Option>
        </Select>
      </div>

      {/* Reviews Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.slice((page - 1) * 2, page * 2).map((review, index) => (
          <Card key={index} className="w-full">
            <div className="flex justify-between items-center mb-2">
              <Rate allowHalf defaultValue={review.rating} disabled />
              <span>{review.date}</span>
            </div>
            <p>{review.text}</p>
            <p className="text-gray-500 mt-2">{review.managerResponse}</p>
            <div className="flex justify-between items-center mt-4">
              <div>
                <LikeOutlined className="mr-1" />
                {review.helpfulCount} People Found This Helpful
              </div>
              <Button type="link">Read More</Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Pagination Section */}
      <div className="flex justify-center mt-6">
        <Pagination
          current={page}
          total={reviews.length}
          pageSize={2}
          onChange={handlePageChange}
        />
      </div>

      {/* Modal for Review */}
      {showModal && <ReviewModal setShowModal={setShowModal} />}
    </div>
  );
};

export default FeedbackRequest;
