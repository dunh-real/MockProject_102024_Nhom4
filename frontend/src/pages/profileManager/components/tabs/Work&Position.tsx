import React from "react";
import { FaEye } from "react-icons/fa";
const WorkPosition: React.FC = () => {
  return (
    <form action="">
      <div>
        <h2 className="text-xl font-bold mb-4">Work & Position</h2>
        <div>
          <label className="block text-gray-700 font-bold mb-2">You are responsible for request about:</label>
          <input
            type="text"
            value="Manager"
            placeholder="Manager"
            className="w-full bg-gray-100 p-2 rounded-md"
            disabled
          />
        </div>
        <div className="mt-6">
          <label className="block text-gray-700 font-bold mb-2">Position</label>
          <input
            type="text"
            value="Manager"
            placeholder="Manager"
            className="w-full bg-gray-100 p-2 rounded-md"
            disabled
          />
        </div>
        <div className="mt-6">
          <button className="bg-orange-400 text-white py-2 px-11 flex gap-2 items-center rounded-lg hover:bg-orange-500">
            <p>View contract</p><FaEye className="text-white" />
          </button>
        </div>
        <div className="mt-6">
          <button className="bg-orange-400 text-white py-2 px-11 rounded-lg hover:bg-orange-500">
            GoBack
          </button>
        </div>
      </div>
    </form>
  );
};

export default WorkPosition;
