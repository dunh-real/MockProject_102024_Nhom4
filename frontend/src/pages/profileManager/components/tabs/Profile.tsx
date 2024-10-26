
import React, { useState } from "react";
import EditProfileModal from "../EditModal";
const ProfileManager: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    id: "MGR12345",
    name: "Nguyen Van A",
    gender: "Male",
    age: "34",
    phoneNumber: "0111222333",
    email: "manager@example.com",
    temporaryAddress: "123 Temporary St., Example City",
    permanentAddress: "456 Permanent Ave., Example City",
    managedBuildings: "Building A, Building B, Building C",
  });

  const handleEditClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveChanges = () => {
    setIsModalOpen(false);
  };

  return (
    <form action="">
      <div className="max-w-4xl mx-auto p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Manager Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-bold mb-1">ID</label>
            <input
              type="text"
              value={profileData.id}
              className="w-full bg-gray-100 p-3 rounded-md"
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1">Name</label>
            <input
              type="text"
              value={profileData.name}
              className="w-full bg-gray-100 p-3 rounded-md"
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1">Gender</label>
            <input
              type="text"
              value={profileData.gender}
              className="w-full bg-gray-100 p-3 rounded-md"
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1">Age</label>
            <input
              type="text"
              value={profileData.age}
              className="w-full bg-gray-100 p-3 rounded-md"
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1">Phone Number</label>
            <input
              type="text"
              value={profileData.phoneNumber}
              className="w-full bg-gray-100 p-3 rounded-md"
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1">Email Address</label>
            <input
              type="text"
              value={profileData.email}
              className="w-full bg-gray-100 p-3 rounded-md"
              disabled
            />
          </div>
          <div className="md:row-span-2">
            <label className="block text-gray-700 font-bold mb-1">Temporary Address</label>
            <textarea
              className="w-full bg-gray-100 p-3 rounded-md"
              value={profileData.temporaryAddress}
              disabled
            ></textarea>
          </div>
          <div className="md:row-span-2">
            <label className="block text-gray-700 font-bold mb-1">Permanent Address</label>
            <textarea
              className="w-full bg-gray-100 p-3 rounded-md"
              value={profileData.permanentAddress}
              disabled
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-bold mb-1">Managed Buildings</label>
            <textarea
              className="w-full bg-gray-100 p-3 rounded-md"
              value={profileData.managedBuildings}
              disabled
            ></textarea>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button
            className="bg-orange-400 text-white py-2 px-11 rounded-lg hover:bg-orange-500"
            onClick={handleEditClick}
          >
            Edit
          </button>
        </div>

        {/* Edit Modal */}
        <EditProfileModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          profileData={profileData}
          setProfileData={setProfileData}
          onSave={handleSaveChanges}
        />
      </div>
    </form>
  );
};

export default ProfileManager;
