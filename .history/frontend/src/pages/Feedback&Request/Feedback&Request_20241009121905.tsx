import React, { useState } from 'react';
import { Rate } from 'antd'; // Dùng Antd cho Rate, có thể thay thế bằng biểu tượng của Tailwind nếu cần
import { LikeOutlined } from '@ant-design/icons';
import ReviewModal from '../../component/ReviewModal';

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

const ReviewList: React.FC = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    const handlePageChange = (page: number) => {
        setPage(page);
    };

    const handleSortChange = (value: string) => {
        console.log(`Sort by: ${value}`);
    };

    return (
        <div className="p-6 bg-gray-50">
            <div className="flex">
                <div className="w-1/5 h-screen bg-[#CBCBCB] p-4">
                    <div>
                        <h1>MOCKCARE</h1>
                    </div>
                    <ul>
                        <li className="py-2  hover:bg-[#fbc7a7] cursor-pointer">Apartments</li>
                        <li className="py-2  hover:bg-[#fbc7a7] cursor-pointer">Work Schedule</li>
                        <li className="py-2 hover:bg-[#fbc7a7] bg-[#f05a28] text-white cursor-pointer">
                            Feedback & Request
                        </li>
                        <li className="py-2  hover:bg-[#fbc7a7] cursor-pointer">Legal Documents</li>
                        <li className="py-2  hover:bg-[#fbc7a7] cursor-pointer">Contract Information</li>
                        <li className="py-2 hover:bg-[#fbc7a7] cursor-pointer">Training</li>
                    </ul>
                </div>
                <div className="w-4/5 p-6 bg-white">
                    <div className="flex justify-end">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Avatar"
                            className="rounded-full"
                        />
                    </div>
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center">
                            <div className="bg-[#f05a28] text-white text-center p-4 rounded-lg">
                                <div className="text-2xl font-bold">4.5</div>
                                <div className="text-sm">Great</div>
                                <div className="text-xs">Out of 5</div>
                            </div>
                            <div className="ml-4">
                                <Rate allowHalf defaultValue={4.5} disabled />
                                <div className="text-gray-500">4.5 Blended Score</div>
                                <div className="text-gray-500">77 Renter Reviews</div>
                            </div>
                        </div>
                        <button
                            onClick={() => setShowModal(true)}
                            className="bg-[#f05a28] text-white px-4 py-2 rounded hover:bg-[#f25f30]"
                        >
                            Write a Review
                        </button>
                    </div>
                    <div className="mb-6 flex justify-between">
                        <select
                            onChange={(e) => handleSortChange(e.target.value)}
                            className="border border-gray-300 rounded px-4 py-2"
                        >
                            <option value="recent">Most Recent</option>
                            <option value="highest">Highest Rating</option>
                            <option value="lowest">Lowest Rating</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {reviews.slice((page - 1) * 2, page * 2).map((review, index) => (
                            <div key={index} className="p-4 border border-gray-200 rounded-lg bg-white shadow">
                                <div className="flex justify-between items-center mb-2">
                                    <Rate allowHalf defaultValue={review.rating} disabled />
                                    <span className="text-sm text-gray-600">{review.date}</span>
                                </div>
                                <p className="text-gray-700">{review.text}</p>
                                <p className="text-gray-500 mt-2">{review.managerResponse}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <LikeOutlined className="mr-1" />
                                        {review.helpfulCount} People Found This Helpful
                                    </div>
                                    <button className="text-blue-500">Read More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-6">
                        <button
                            onClick={() => handlePageChange(page - 1)}
                            className="px-4 py-2 text-gray-500"
                            disabled={page === 1}
                        >
                            Prev
                        </button>
                        <button
                            onClick={() => handlePageChange(page + 1)}
                            className="px-4 py-2 text-gray-500"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
            {showModal && <ReviewModal setShowModal={setShowModal} />}
        </div>
    );
};

export default ReviewList;
