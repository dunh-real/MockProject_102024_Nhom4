import React from "react";

const Profile: React.FC = () => {
  return (
    <form action="">
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg ">
        <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-700 font-bold mb-1">Name</label>
            <input
              type="text"
              value="Nguyen Van A"
              className="w-full bg-gray-100 p-3 rounded-md"
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1">Sex</label>
            <input
              type="text"
              value="Male"
              className="w-full bg-gray-100 p-3 rounded-md"
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1">Contact</label>
            <input
              type="text"
              value="0111222333"
              className="w-full bg-gray-100 p-3 rounded-md"
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1">Resident ID</label>
            <input
              type="text"
              value="0123 4567 8910 1112"
              className="w-full bg-gray-100 p-3 rounded-md"
              disabled
            />
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1">Birth</label>
            <input
              type="text"
              value="01/01/1990"
              className="w-full bg-gray-100 p-3 rounded-md"
              disabled
            />
          </div>
          <div className="md:row-span-2">
            <label className="block text-gray-700 font-bold mb-1">Temporary Address</label>
            <textarea
              className="w-full bg-gray-100 p-3 rounded-md"
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor."
              disabled
            ></textarea>
          </div>
          <div>
            <label className="block text-gray-700 font-bold mb-1">Permanent Address</label>
            <textarea
              className="w-full bg-gray-100 p-3 rounded-md"
              value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor."
              disabled
            ></textarea>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="bg-orange-400 text-white py-2 px-11 rounded-lg hover:bg-orange-500">
            Edit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Profile;
