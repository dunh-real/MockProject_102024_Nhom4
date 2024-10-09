import React, { useState } from 'react';
import { Rate } from 'antd'; // Dùng Antd cho Rate, có thể thay thế bằng biểu tượng của Tailwind nếu cần
import { LikeOutlined } from '@ant-design/icons';
import ReviewModal from '../../component/ReviewModal';
import Sidebar from '../../component/Sidebar';

interface Review {
    date: string;
    rating: number;
    text: string;
    managerResponse: string;
    helpfulCount: number;
    renter: string;
}

const reviews: Review[] = [
    {
        date: 'Sept. 8, 2024',
        rating: 5,
        renter: 'Verified Renter',
        text: 'I love living at Presidential Towers. Such a beautiful place with great amenities. I also love how responsive the maintenance team is.',
        managerResponse: 'Property Manager Responded Sept. 23, 2024',
        helpfulCount: 2,
    },
    {
        date: 'June 6, 2024',
        rating: 4.5,
        renter: 'Verified Renter',
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
        <div className="min-h-screen bg-gray-50">
            <div className="flex bg-[#f8a769d9] justify-between items-center p-3">
                <div className="w-1/5">
                    <h1 className="text-xl lg:text-2xl">MOCKCARE</h1>
                </div>
                <div className="flex justify-end">
                    <img
                        src="https://via.placeholder.com/40"
                        alt="Avatar"
                        className="rounded-full w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] mr-2"
                    />
                </div>
            </div>
            <div className="flex flex-row lg:flex-row">
                <Sidebar />
                <div className="lg:w-4/5 p-4 sm:p-6 bg-white">
                    <div className="mb-4">
                        <h2 className="text-lg sm:text-xl md:text-2xl font-bold">Feedback & Request</h2>
                        <hr className="h-[4px] sm:h-[6px] md:h-[8px] bg-[#F8A869]" />
                    </div>
                    <div className="flex flex-col lg:flex-row justify-around items-center mb-6">
                        <div className="flex flex-col items-center mb-4 lg:mb-0">
                            <div className="text-center text-[#F8A869] border-black border-2 p-6">
                                <p className="text-[25px] sm:text-[30px] lg:text-[35px] font-bold">4.5</p>
                                <p className="text-sm sm:text-lg lg:text-xl">Great</p>
                            </div>
                            <div className="text-xs w-full border-black border-2 bg-[#000000c8]">
                                <p className="text-white p-1 text-center text-sm">Out of 5</p>
                            </div>
                        </div>
                        <div className="bg-[#d9d9d97b] flex flex-col lg:flex-row justify-between items-center w-full max-w-3xl p-6 lg:p-10 space-y-6 lg:space-y-0">
                            <div>
                                <Rate allowHalf defaultValue={4.5} disabled style={{ color: '#F8A869' }} />
                                <div className="text-[#000000] mt-2 mb-2 text-lg sm:text-xl lg:text-2xl">4.5 Blended Score</div>
                                <div className="text-[#000000] font-light text-base sm:text-lg lg:text-2xl">77 Renter Reviews</div>
                            </div>
                            <div className="text-center">
                                <p className="text-[#000000] font-light text-sm sm:text-base lg:text-lg">
                                    Share details of your own experience <br />
                                    with this property
                                </p>
                                <button
                                    onClick={() => setShowModal(true)}
                                    className="bg-[#f05a28] text-white px-8 py-3 mt-3 rounded hover:bg-[#ff6a38] hover:text-black text-sm sm:text-base lg:text-lg"
                                >
                                    Write a Review
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                        <p className="text-base sm:text-lg">Sort By:</p>
                        <select
                            onChange={(e) => handleSortChange(e.target.value)}
                            className="border border-gray-300 rounded px-4 py-2 text-sm sm:text-base"
                        >
                            <option value="recent">Most Recent</option>
                            <option value="highest">Highest Rating</option>
                            <option value="lowest">Lowest Rating</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {reviews.slice((page - 1) * 2, page * 2).map((review, index) => (
                            <div key={index} className="p-4 border border-gray-200 rounded-lg bg-white shadow">
                                <div className="flex justify-between items-center mb-2">
                                    <div>
                                        <Rate allowHalf defaultValue={review.rating} disabled />
                                        <p className="text-sm font-light">{review.renter}</p>
                                    </div>
                                    <span className="text-sm text-gray-600">{review.date}</span>
                                </div>
                                <p className="text-gray-700">{review.text}</p>
                                <p className="text-gray-500 mt-2">{review.managerResponse}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <div className="flex items-center text-sm text-gray-600">
                                        <LikeOutlined className="mr-1 text-[#F8A869]" />
                                        {review.helpfulCount} People Found This Helpful
                                    </div>
                                    <button className="text-blue-500 text-sm">Read More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-3 mb-5">
                        <button
                            onClick={() => handlePageChange(page - 1)}
                            className="px-4 py-2 text-gray-500 text-sm sm:text-base"
                            disabled={page === 1}
                        >
                            Prev
                        </button>
                        <button
                            onClick={() => handlePageChange(page + 1)}
                            className="px-4 py-2 text-gray-500 text-sm sm:text-base"
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
