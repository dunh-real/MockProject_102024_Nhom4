import { useNavigate } from "react-router-dom";
import { Button } from "../../../../../components/ui/button";
import { useState } from "react";
const AddRequestForm = () => {
    const navigate = useNavigate();
    //lưu thông tin các trường
    const [formData, setFormData] = useState({
        requestId: "",
        requestType: "",
        status: "",
        requester: "",
        solution: "",
    });
    //xử lý khi thay đổi thông tin trong form
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form data:", formData);
    };

    return (
        <div className="max-w-4xl mx-auto shadow-lg p-4 bg-white rounded-lg">
            <h2 className="text-2xl text-center font-semibold mb-6">Create Request</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Request ID</label>
                    <input
                        type="text"
                        name="resident_id"
                        value={formData.requestId}
                        onChange={handleInputChange}
                        placeholder="Request ID"
                        className="w-full bg-gray-100 p-3 rounded-md"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Request Type</label>
                    <input
                        type="text"
                        name="request_type"
                        value={formData.requestType}
                        onChange={handleInputChange}
                        className="w-full bg-gray-100 p-3 rounded-md"
                        placeholder="Request Type"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <input
                        type="text"
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className="w-full bg-gray-100 p-3 rounded-md"
                        placeholder="Status"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <input
                        type="text"
                        name="description"
                        value={formData.requester}
                        onChange={handleInputChange}
                        className="w-full bg-gray-100 p-3 rounded-md"
                        placeholder="Description"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Solution</label>
                    <input
                        type="text"
                        name="solution"
                        value={formData.solution}
                        onChange={handleInputChange}
                        className="w-full bg-gray-100 p-3 rounded-md"
                        placeholder="Solution"
                    />
                </div>
                <div className="flex justify-between">
                    <div className="flex justify-start">
                        <Button className="px-8 bg-black text-white" type="submit"
                            onClick={() => navigate("/request")
                            }>Back</Button>
                    </div>
                    <div className="flex justify-end">
                        <Button className="px-8" type="submit">Create</Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddRequestForm;
