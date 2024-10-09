import React, { useState } from 'react';
import { Modal, Rate, Input, Button } from 'antd';
import 'tailwindcss/tailwind.css'; // Ensure TailwindCSS is included

interface ReviewModalProps {
    setShowModal: (show: boolean) => void;
}

const ReviewModal: React.FC<ReviewModalProps> = ({ setShowModal }) => {
    const [rating, setRating] = useState<number>(5);
    const [headline, setHeadline] = useState<string>('');
    const [review, setReview] = useState<string>('');

    const handleSubmit = () => {
        console.log({ rating, headline, review });
        setShowModal(false);
    };

    const ratingLabels = [
        { star: 5, label: 'This property is excellent' },
        { star: 4, label: 'This property is great' },
        { star: 3, label: 'This property is good' },
        { star: 2, label: 'This property is ok' },
        { star: 1, label: 'This property is poor' },
    ];

    return (
        <Modal
            title="Rate & Review Presidential Towers"
            visible={true}
            onCancel={() => setShowModal(false)}
            footer={null}
            className="p-6"
            width="100%"
            style={{ maxWidth: '850px' }}
        >
            <div className="flex flex-col mb-6 md:flex-row">
                <div className="mb-4 md:w-1/3 md:mb-0">
                    {ratingLabels.map((item) => (
                        <div
                            key={item.star}
                            className={`flex flex-col p-2 mb-2 cursor-pointer rounded-md ${rating === item.star ? 'bg-orange-100' : 'bg-gray-100'}`}
                            onClick={() => setRating(item.star)}
                        >
                            <div className="flex gap-3 items-center">
                                <span className="text-sm">{item.star} Star</span>
                                <Rate value={item.star} disabled className="mr-2" />
                            </div>
                            <span className="text-sm mt-2">{item.label}</span>
                        </div>
                    ))}
                </div>
                <div className="md:w-2/3 mt-5 md:pl-6">
                    <label htmlFor="headline" className="block mb-2 font-medium">Headline</label>
                    <Input
                        id="headline"
                        placeholder="Headline"
                        value={headline}
                        onChange={(e) => setHeadline(e.target.value)}
                        className="mb-4"
                    />
                    <label htmlFor="review" className="block mb-2 font-medium">Your Review</label>
                    <Input.TextArea
                        id="review"
                        placeholder={`Why is it ${ratingLabels.find((r) => r.star === rating)?.label.toLowerCase()}?`}
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        rows={4}
                    />
                    <p className="mt-2 text-xs text-gray-500">50 character minimum</p>
                </div>
            </div>
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
