import React, { useState } from "react";
import EditProfileModal from "../EditModal";
const ProfileResident: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileData, setProfileData] = useState({
    id: "RES67890",
    name: "John Doe",
    gender: "Male",
    age: "28",
    phoneNumber: "0123456789",
    email: "resident@example.com",
    address: "789 Resident St., Example City",
    rentingBuilding: "Building D",
    rentingTime: { from: "2023-01-15", to: "2024-01-15" },
    roomMembers: [
      { id: "RM001", name: "Jane Doe", email: "JaneDoe@gmail.com" },
      { id: "RM002", name: "Alice Smith", email: "AliceSmith@gmail.com" },
    ],
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
    <form method="" action="">
      <div className="max-w-4xl  mx-auto p-4 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Resident Profile</h2>
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
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-bold mb-1">Address</label>
            <textarea
              className="w-full bg-gray-100 p-3 rounded-md"
              value={profileData.address}
              disabled
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1">Renting Building</label>
            <input
              type="text"
              value={profileData.rentingBuilding}
              className="w-full bg-gray-100 p-3 rounded-md"
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1">Renting Time</label>
            <input
              type="text"
              value={`${profileData.rentingTime.from} to ${profileData.rentingTime.to}`}
              className="w-full bg-gray-100 p-3 rounded-md"
              disabled
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 font-bold mb-1">Room Members</label>
            <ul className="bg-gray-100 p-3 rounded-md">
              {profileData.roomMembers.map((member) => (
                <li key={member.id} className="text-gray-700">
                  {member.id} - {member.name} - {member.email}
                </li>
              ))}
            </ul>
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

export default ProfileResident;
