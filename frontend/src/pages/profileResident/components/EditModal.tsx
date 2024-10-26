
import React from "react";
interface EditProfileModalProps {
    isOpen: boolean;
    onClose: () => void;
    profileData: any;
    setProfileData: React.Dispatch<React.SetStateAction<any>>;
    onSave: () => void;
}
const EditProfileModal: React.FC<EditProfileModalProps> = ({ isOpen, onClose, profileData, setProfileData, onSave }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setProfileData((prevData: any) => ({ ...prevData, [name]: value }));
    };

    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <form action="" method="get">
                <div className="bg-white rounded-lg w-full max-w-lg shadow-lg overflow-hidden">
                    <div className="p-4 border-b border-gray-200">
                        <h3 className="text-xl font-semibold text-center text-gray-800">Edit Resident Profile</h3>
                    </div>
                    <div className="p-6 max-h-[60vh] overflow-y-auto">
                        <div className="grid grid-cols-1 gap-5">
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">ID</label>
                                <input
                                    type="text"
                                    name="id"
                                    value={profileData.id}
                                    onChange={handleInputChange}
                                    disabled
                                    className="w-full bg-gray-50 p-3 rounded-md border border-gray-300"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={profileData.name}
                                    onChange={handleInputChange}
                                    placeholder="Enter your name"
                                    className="w-full bg-gray-50 p-3 rounded-md border border-gray-300 focus:border-orange-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Gender</label>
                                <input
                                    type="text"
                                    name="gender"
                                    value={profileData.gender}
                                    onChange={handleInputChange}
                                    placeholder="Enter your gender"
                                    className="w-full bg-gray-50 p-3 rounded-md border border-gray-300 focus:border-orange-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Age</label>
                                <input
                                    type="number"
                                    name="age"
                                    value={profileData.age}
                                    onChange={handleInputChange}
                                    placeholder="Enter your age"
                                    className="w-full bg-gray-50 p-3 rounded-md border border-gray-300 focus:border-orange-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    value={profileData.phoneNumber}
                                    onChange={handleInputChange}
                                    placeholder="Enter your phone number"
                                    className="w-full bg-gray-50 p-3 rounded-md border border-gray-300 focus:border-orange-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={profileData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email address"
                                    className="w-full bg-gray-50 p-3 rounded-md border border-gray-300 focus:border-orange-400"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Address</label>
                                <textarea
                                    name="address"
                                    value={profileData.address}
                                    onChange={handleInputChange}
                                    placeholder="Enter your address"
                                    className="w-full bg-gray-50 p-3 rounded-md border border-gray-300 focus:border-orange-400"
                                ></textarea>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Renting Building</label>
                                <input
                                    type="text"
                                    name="rentingBuilding"
                                    value={profileData.rentingBuilding}
                                    onChange={handleInputChange}
                                    placeholder="Enter the building name"
                                    className="w-full bg-gray-50 p-3 rounded-md border border-gray-300 focus:border-orange-400"
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">Renting Start Date</label>
                                    <input
                                        type="date"
                                        name="rentingStartDate"
                                        value={profileData.rentingStartDate}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-50 p-3 rounded-md border border-gray-300 focus:border-orange-400"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-1">Renting End Date</label>
                                    <input
                                        type="date"
                                        name="rentingEndDate"
                                        value={profileData.rentingEndDate}
                                        onChange={handleInputChange}
                                        className="w-full bg-gray-50 p-3 rounded-md border border-gray-300 focus:border-orange-400"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-1">Room Members</label>
                                <textarea
                                    name="roomMembers"
                                    value={profileData.roomMembers}
                                    onChange={handleInputChange}
                                    placeholder="Enter room members ID and Name"
                                    className="w-full bg-gray-50 p-3 rounded-md border border-gray-300 focus:border-orange-400"
                                ></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 border-t border-gray-200 flex justify-end space-x-3">
                        <button
                            className="bg-gray-300 text-gray-700 py-2 px-6 rounded-lg font-medium hover:bg-gray-400 transition"
                            onClick={onClose}
                        >
                            Cancel
                        </button>
                        <button
                            className="bg-orange-500 text-white py-2 px-6 rounded-lg font-medium hover:bg-orange-600 transition"
                            onClick={onSave}
                        >
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default EditProfileModal;
